
import React, { useState, useEffect,Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams 
  } from "react-router-dom";
import axios from 'axios';
import Banner from '../parts/banners';
export function HomePage() {
    const [banners, setBanners] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUserInfo();
        getBanners();
    }, []);

    const getUserInfo = async () => {
        try {
          const response = await axios.get('https://synzegat.wiremockapi.cloud/user-info');
          console.log(response.data);
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const getBanners = async () => {
        try {
          const response = await axios.get('https://synzegat.wiremockapi.cloud/banners');
          setBanners(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <Box sx={{backgroundColor:'#F6F6F6'}}>
            <div style={{ marginBottom: '10px', flex: '1', justifyContent: 'flex-start', flexDirection: 'row', display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <img src='images/logo.png' style={{ height: '64px' }} />
                <div style={{ marginLeft: '10px' }}>
                    สุขภาพใจของ กฟผ. ให้  <span style={{ color: '#461E99', fontWeight: 800 }}>SynZ</span> ดูแลนะ
                </div>
            </div>
            <div style={{ paddingLeft: '20px', justifyContent: 'flex-start', flexDirection: 'row', display: 'flex', fontSize: '18px', fontWeight: 600 }}>
                { (!user.firstname) ? <Link to="/update" style={{ color: 'red', textDecoration: 'none'}}>กรุณาอัปเดทข้อมูล ⚠️</Link> : 'สวัสดี, '+ user.firstname + ' ' + user.lastname }
                
            </div>
            <Banner data={banners}/>

            <Box sx={{p:3}}>
                <div className='ts2' style={{marginBottom:'20px'}}>
                    จิตแพทย์ 
                </div>

                <Splide
                    options={ {
                        type   : 'loop',
                        gap   : '0.5rem',
                        arrows:false,
                        padding: '20%',
                        focus:'center'
                    } }

                >
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert1.png"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert2.png"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert3.jpg"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                </Splide>

            </Box>

            <Box sx={{p:3}}>
                <div className='ts2' style={{marginBottom:'20px'}}>
                    นักจิตวิทยา 
                </div>

                <Splide
                    options={ {
                        type   : 'loop',
                        gap   : '0.5rem',
                        arrows:false,
                        padding: '20%',
                        focus:'center'
                    } }

                >
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert1.png"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert2.png"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                    <SplideSlide>
                        <Card sx={{ border:0,boxShadow:'unset' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                className='experimgcard'
                                image="/images/expert3.jpg"
                                alt="green iguana"
                                />
                                <CardContent className='cardcontent' sx={{backgroundColor:'#6565651c'}}>
                                    <Typography gutterBottom textAlign={'center'} className='NotoSansThai ts-1' component="div">
                                        ศุภาพิชญ์ แก้ววัชระรังษี
                                    </Typography>
                                    <Typography  color="text.secondary" mb={1} className='NotoSansThai ts-3' textAlign={'center'}>
                                        นักจิตวิทยา
                                    </Typography>
                                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                                        <div className='tag'> <img src='/images/icon1.png' className='me-2' /> ความสัมพันธ์</div>
                                        <div className='tag'> <img src='/images/icon2.png' className='me-2' />  เด็กและวัยรุ่น</div>
                                    </div>
                                    <Button 
                                        variant="contained"  
                                        component={Link} to="/appointment/2"
                                        fullWidth
                                        className='NotoSansThai'
                                        sx={{ 
                                            borderRadius: 30 ,
                                            backgroundColor:'#461E99',
                                            padding:'7px 32px',
                                            fontSize:'16px',
                                            marginTop:'10px'
                                        }}
                                    >ปรึกษา </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SplideSlide>
                </Splide>

            </Box>

        </Box>
    );
}