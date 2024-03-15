import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import { JitsiMeeting } from '@jitsi/react-sdk';
import axios from 'axios';
import { apiUrl } from '../../configs/app';

export function MeetPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [room, setRoom] = useState(location.state.room) || "synzroom";
    const [user, setUser] = useState(location.state.user);
    const [domain, setDomain] = useState('meet.nsd.services');
    const [toolbar, setToolbar] = useState({
        toolbarButtons: [
            'microphone',
            'camera',
            'fullscreen',
            'synz-tool',
            'profile',
            'raisehand'
        ],
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: false,
        enableEmailInStats: false
    });
    const [meet_info, setMeetInfo] = useState({});

    useEffect(() => {
        // set toolbars options
        if(localStorage.getItem('meet_' + location.state.room) !== null) {
            let meet = JSON.parse(localStorage.getItem('meet_' + location.state.room));
            setMeetInfo(meet)
        } else {
            let meet = {
                user_id: user.id,
                appointment_number: location.state.room,
                start_datetime: Date.now(),
                end_datetime: ''
            }
            
            setMeetInfo(meet)
            localStorage.setItem('meet_' + location.state.room, JSON.stringify(meet));
        }
        setRoom(location.state.room)

    }, []);

    const exitHandler = async () => {
        let data = {
            user_id: user.id,
            appointment_number: location.state.room,
            start_datetime: meet_info.start_time,
            end_datetime: Date.now()
        };

        await setMeetInfo(data);
        await localStorage.setItem('meet_' + location.state.room, '' );
        await axios.post(apiUrl + '/api/appointment/meetingroom/time', data);

        navigate('/question', {state: location.state})
    };

    return (
        <Box component="form">
            <JitsiMeeting
                domain={domain}
                roomName={room}
                configOverwrite={{
                    toolbar, 
                    prejoinConfig: {
                        enabled: false
                    },
                    toolbarConfig: {
                        alwaysVisible: true
                    },
                    deeplinking: {
                        disabled : true
                    },
                    p2p: {
                        enabled: true
                    },
                    setVideoQuality: 720,
                    disablePolls: true,
                    liveStreaming: {
                        enabled: false
                    },
                    localRecording: {
                        enabled: false
                    },
                    recordingService: {
                        enabled: false
                    },
                    hideAddRoomButton: true,
                    enableClosePage: false,
                    customToolbarButtons: [
                        {
                            icon: '/images/stethoscope.svg',
                            id: 'synz-tool',
                            text: 'Synz Tools'
                        }
                    ],
                    customParticipantMenuButtons: [
                        {
                            icon: '/images/stethoscope.svg',
                            id: 'synz-tool',
                            text: 'Synz Tools'
                        }
                    ],
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                }}
                userInfo={{
                    displayName: user
                }}
                onApiReady={(externalApi) => {
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                }}
                onReadyToClose = {exitHandler}
                getIFrameRef={(iframeRef) => { 
                    iframeRef.style.height = '100vh'; 
                    iframeRef.style.margin = 0; 
                    iframeRef.style.padding = 0;
                    iframeRef.style.padding = 0;
                    
                }}
            />
        </Box>
    )
}