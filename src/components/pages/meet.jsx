import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import { JitsiMeeting } from '@jitsi/react-sdk';
import Button from '@mui/material/Button';

export function MeetPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [room, setRoom] = useState(location.state.room) || "synzroom";
    const [user, setUser] = useState(location.state.user);
    const [domain, setDomain] = useState('meet.nsd.services');
    const [toolbar, setToolbar] = useState({});

    useEffect(() => {
        // set toolbars options
        setRoom(location.state.room)
        setToolbar({
            toolbarButtons: [
                'microphone',
                'camera',
                'fullscreen',
                'hangup',
                'profile',
                'raisehand'
            ],
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: false,
            enableEmailInStats: false
        });
    }, []);

    const exitHandler = () => {
        // create confrimation script
        if(window.confirm('Are you sure you want to exit?')) {
            navigate('/question', {state: location.state});
        }

    };
    return (
        <Box component="form">
            {/* <div style={{ position: 'fixed', bottom: 85, right: 10, zIndex: 100 }}>
                <Button variant="contained"
                onClick={exitHandler}
                style={{
                    backgroundColor: '#ffffff', 
                    borderRadius: 50, 
                    color: '#4a148c'
                }}>ปิดหน้าต่าง</Button>
            </div> */}
            <JitsiMeeting
                domain={domain}
                roomName={room}
                configOverwrite={toolbar}
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
                onReadyToClose = {() => navigate('/question', {state: location.state})}
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