
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
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
          background:"#461E99"
        }}
      >
        <Box
          component="img"
          sx={{
            width: '90%',
            textAlign:'center',
          }}
          src="/images/logo3.png"
        />

      </Box>
    );
}