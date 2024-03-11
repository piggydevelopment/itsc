// import missing package

import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import {
    BrowserRouter as Router,
    useNavigate
} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import ConfrimBanner from '../../assets/images/confirm_banner.png';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Chat from './chat';
export const ConfirmPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
  
    return (
        <Box>
            <Chat/>
            <Stack>
                <img src={ConfrimBanner} className='imgslide' style={{ width: '80%', margin: '20% auto 5% auto' }} />
                <Box>
                    <Typography className='NotoSansThai' component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, fontSize: 24, marginBottom: '10px' }}>
                        ยืนยันการจองสำเร็จ
                    </Typography>
                    <Typography className='NotoSansThai' component="div" sx={{ fontSize: 16, color: "#656565", textAlign: 'center', marginBottom: '20px' }}>
                        คุณสามารถใช้บริการได้ตามวันที่นัดหมาย
                    </Typography>

                </Box>
            </Stack>
            <Button
                variant="contained"
                type="submit"
                fullWidth
                className='NotoSansThai'
                sx={{
                    borderRadius: 50,
                    backgroundColor: '#461E99',
                    padding: '16px 32px',
                    fontSize: '16px',
                    width: '80%',
                    margin: '20px auto',
                    display: 'block'
                }}
                onClick={() => navigate('/home')}
            >เสร็จสิ้น </Button>
        </Box>
    )
}