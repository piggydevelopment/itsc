
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {
  BrowserRouter as Router,
  useNavigate 
} from "react-router-dom";
export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("test@abc.com");
    const [error, setError] = useState(false);

    const handleChange = e => {
      setEmail(e.target.value);
      if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    };

    const handleSubmit = e => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        setError(false);
        // redirect to /otp page with props email
        navigate('/otp', { state: { userEmail: email } });
      } else {
        setError(true);
      }
    };


    return (
      <Box
        component="form"
        sx={{
          height:'100vh'
        }}
        noValidate
        autoComplete="off"
        className='bg-login'
        onSubmit={handleSubmit}
      >
        <Box
          component="img"
          sx={{
            width: '90%',
            textAlign:'center',
            mt:'15%',
            mb:'1%'
          }}
          src="/images/logo.png"
        />
        <Stack sx={{mx:3}} spacing={5}>
          
            <TextField
              required 
              id="outlined-controlled"
              label="กรุณาระบุอีเมลองค์กร"
              value={email}
              placeholder='กรอกอีเมล'
              sx={{mb:3}}
              inputProps={{style: {fontSize: 18} ,type: "email"}}
              onChange={handleChange}
              error={error}
 
            />
          
            <Button 
              variant="contained"  
              type="submit"
              fullWidth
              className='NotoSansThai'
              sx={{ 
                borderRadius: 50 ,
                backgroundColor:'#461E99',
                padding:'16px 32px',
                fontSize:'16px',
              }}
            >ถัดไป <ArrowForwardOutlinedIcon sx={{ml:2}} />  </Button>
          
        
        </Stack>
      </Box>
    );
}