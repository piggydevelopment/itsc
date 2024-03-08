
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams 
  } from "react-router-dom";

export function UpdatePage() {
    const [area, setArea] = React.useState('');
    const [department, setDepartment] = React.useState('');

    const handleSubmit = e => {

    
    };

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <Box sx={{backgroundColor:'#FFF',paddingBottom:'80px'}}>
            <AppBar position="relative" sx={{backgroundColor:'#FFF',color:'#000',boxShadow:'unset',paddingTop:'10px'}}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2,position:"absolute" }}
                    component={Link} to="/home"
                    >
                    <ArrowBackIosNewOutlinedIcon />
                    </IconButton>
                    <Typography  className='NotoSansThai' component="div" sx={{ flexGrow: 1,textAlign:'center',fontWeight:600,fontSize:18 }}>
                        บัญชี
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                pt={5}
            >

                <Stack sx={{mx:3}} spacing={4}>
                    <TextField
                        id=""
                        label="ชื่อ*"
                        variant="standard"
                        defaultValue={"วรรณพร"}
                    />
                    <TextField
                        id=""
                        label="นามสกุล*"
                        variant="standard"
                        defaultValue={"วงวรางค์"}
                    />
                    <TextField
                        id=""
                        label="อีเมล*"
                        variant="standard"
                        defaultValue={"sample@gmail.com"}
                    />
                    <TextField
                        id=""
                        label="เบอร์โทร*"
                        variant="standard"
                        defaultValue={"0123456789"}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="synz-select-label">สถานปที่ฏิบัติงาน *</InputLabel>
                        <Select
                            labelId="synz-select-label"
                            id="synz-select-area"
                            value={area}
                            label="สถานปที่ฏิบัติงาน *"
                            variant='standard'
                            onChange={handleChangeArea}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="synz-select-label">สังกัด *</InputLabel>
                        <Select
                            labelId="synz-select-label"
                            id="synz-select-department"
                            value={department}
                            label="สังกัด *"
                            variant='standard'
                            onChange={handleChangeDepartment}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
    
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
                    >บันทึกข้อมูล   </Button>
                
                </Stack>
            </Box>

           
        </Box>
    );
}