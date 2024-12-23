
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {
    BrowserRouter as Router,
    useNavigate 
  } from "react-router-dom";
  
 
export function LoadPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          navigate('/login')
        }, 2000)
    }, [])


    return (
      <Box
        sx={{
          height:'100vh',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          background:"#F4F3FE"
        }}
      >
        <Box
          component="img"
          sx={{
            width: '50%',
            textAlign:'center',
          }}
          src="/images/logo.png"
        />

      </Box>
    );
}