
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Paper from '@mui/material/Paper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams 
  } from "react-router-dom";




export function QuestionPage() {

    const labels = {
        0.5: 'ควรปรับปรุง',
        1: 'ควรปรับปรุง',
        1.5: 'พอใช้',
        2: 'พอใช้',
        2.5: 'ปานกลาง',
        3: 'ปานกลาง',
        3.5: 'ดี',
        4: 'ดี',
        4.5: 'ยอดเยี่ยม',
        5: 'ยอดเยี่ยม',
    };
      
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const [value, setValue] = React.useState(0);
    const [ratingtext, setRatingtext] = React.useState("");
    const [hover, setHover] = React.useState(-1);
    
    return (
        <Box sx={{backgroundColor:'#FFF',paddingBottom:'80px'}}>
            <AppBar position="relative" sx={{backgroundColor:'#FFF',color:'#000',boxShadow:'unset',paddingTop:'10px'}}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2,position:"absolute" }}
                    component={Link} to="/"
                    >
                    <ArrowBackIosNewOutlinedIcon />
                    </IconButton>
                    <Typography  className='NotoSansThai' component="div" sx={{ flexGrow: 1,textAlign:'center',fontWeight:600,fontSize:18 }}>
                    เสร็จสิ้นการใช้บริการ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box p={2} >
                <Box sx={{px:2,pt:1,pb:1,backgroundColor:'#F6F6F6',borderRadius:'20px'}} mb={3} >

                    <Stack spacing={2}  direction="row" alignItems="center">
                        <Avatar
                            alt=""
                            src="/images/expert1.png"
                            sx={{ width: 64, height: 64 }}
                        />
                        <div>
                            <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                                พญ.สุชาดา นันทพินิจ
                            </Typography>
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                            จิตแพทย์
                            </Typography>
                        </div>
                    </Stack>
                    
                </Box>

                <Typography  className='NotoSansThai' mb={2} component="div" sx={{textAlign:'center',color:'#2C2C2C' }}>
                    ให้คะแนนความพึงพอใจโดยรวม
                </Typography>
                <Stack spacing={2}  justifyContent={'center'} direction={'row'}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        size="large" 
                    />
                </Stack>
                {value !== null && (
                    <Box mt={1} sx={{ textAlign:'center',color:'#F3B85D' }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}


                <Box my={3} px={2}>
                    <FormControl>
                        <FormLabel  className='NotoSansThai' >ความพึงพอใจต่อ SynZ Application*</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="3"
                            name="satisfactionApp"
                            
                        >
                            <FormControlLabel  value="1" control={<Radio />} label="ควรปรับปรุง" />
                            <FormControlLabel value="2" control={<Radio />} label="พอใช้" />
                            <FormControlLabel value="3" control={<Radio />} label="ปานกลาง" />
                            <FormControlLabel value="4" control={<Radio />} label="ดี" />
                            <FormControlLabel value="5" control={<Radio />} label="ดีเยี่ยม" />
                        </RadioGroup>
                    </FormControl>
                
                </Box>

                <Box my={3} px={2}>
                    <FormControl>
                        <FormLabel className='NotoSansThai'>ความพึงพอใจต่อการบริการตรวจสุขภาพใจออนไลน์จาก กฟผ.*</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="3"
                            name="satisfactionService"
                        >
                            <FormControlLabel value="1" control={<Radio />} label="ควรปรับปรุง" />
                            <FormControlLabel value="2" control={<Radio />} label="พอใช้" />
                            <FormControlLabel value="3" control={<Radio />} label="ปานกลาง" />
                            <FormControlLabel value="4" control={<Radio />} label="ดี" />
                            <FormControlLabel value="5" control={<Radio />} label="ดีเยี่ยม" />
                        </RadioGroup>
                    </FormControl>


                    <TextField
                    id=""
                    label="ความคิดเห็นเพิ่มเติม"
                    variant="standard"
                    value={""}
                    fullWidth
                    />
                
                </Box>

                <Stack spacing={2} mt={4} textAlign={'center'} justifyContent={'center'}>
                    <Button 
                    variant="contained"  
                    className='NotoSansThai'
                    type="submit"
                    
                    sx={{ 
                        borderRadius: 50 ,
                        backgroundColor:'#461E99',
                        padding:'10px 32px',
                        fontSize:'16px',
                    }}
                    >ส่งแบบประเมิน</Button>
                    <Button variant="text"
                        className='NotoSansThai'
                        sx={{ 
                            fontSize:'16px',
                            textDecoration:'underline',
                            color:'#461E99',
                        }}
                        component={Link} to="/"
                    >
                         ยังไม่ใช่ตอนนี้
                    </Button>
                </Stack>



                
            </Box>

 
        </Box>
    );
}