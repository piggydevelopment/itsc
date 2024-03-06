
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { MuiOtpInput } from 'mui-one-time-password-input'
import Typography from '@mui/material/Typography';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';

export function OtpPage() {


    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const handleComplete = (finalValue) => {
        console.log(finalValue)
    }

    const handleSubmit = e => {
      e.preventDefault();
      console.log(otp)
      
    };


    return (
      <Box
        component="form"
        sx={{
          height:'100vh',
          px:3
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack 
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }} 
            spacing={2}
        >   
            <div style={{marginBottom:'40px'}}>
                <Typography variant="h4" className='NotoSansThai text-center fw-600' style={{marginBottom:"10px"}} >ใส่รหัสยืนยัน</Typography>
                <div  className='text-center'>กรุณาใส่รหัสยืนยันที่ถูกส่งไปยังอีเมล</div>
                <div  className='text-center'>1xxxxx@egat.co.th</div>
            </div>
            <div style={{marginBottom:'50px'}}>
                <MuiOtpInput 
                    value={otp} 
                    onChange={handleChange} 
                    onComplete={handleComplete}
                />
            </div>

            <div style={{marginBottom:'30px'}}>
                <Button variant="text"
                    className='NotoSansThai'
                    sx={{ 
                        fontSize:'18px',
                        textDecoration:'underline',
                        color:'#461E99',
                    }}
                >
                    <RefreshSharpIcon sx={{mr:2}} /> ส่งรหัสยืนยันอีกครั้ง
                </Button>
            </div>

            <Button 
              variant="contained"  
              className='NotoSansThai'
              type="submit"
              sx={{ 
                borderRadius: 50 ,
                backgroundColor:'#461E99',
                padding:'10px 32px',
                fontSize:'18px',
                width:'50%',
              }}
            >ยืนยีน</Button>
          
        
        </Stack>
      </Box>
    );
}