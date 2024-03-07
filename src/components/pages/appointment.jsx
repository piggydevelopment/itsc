
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams 
  } from "react-router-dom";

export function AppointmentPage() {


    const [isDrawerOpen, setDrawerOpen] = useState(false);
    
    return (
        <Box sx={{backgroundColor:'#F6F6F6'}}>
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
                        รายละเอียดการจอง
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{p:4,backgroundColor:'#FFF'}} mb={2} >
                <Typography  className='NotoSansThai' mb={2} component="div" sx={{ fontWeight:600,fontSize:18 }}>
                    ผู้เชี่ยวชาญ
                </Typography>


                <Stack spacing={2} mb={3} direction="row" alignItems="center">
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
                    onClick={() => setDrawerOpen(true)}
                >ปรึกษา </Button>
                
           

            </Box>

            <Box sx={{p:4,backgroundColor:'#FFF'}} mb={2} >
                <Typography  className='NotoSansThai' mb={2} component="div" sx={{ fontWeight:600,fontSize:18 }}>
                    ประวัติการศึกษา
                </Typography>
                <ul>
                    <li style={{marginBottom:'15px'}}>2553 แพทย์ประจำบ้าน สาขาจิตเวชศาสตร์   คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล</li>
                    <li style={{marginBottom:'15px'}}>2556 จิตแพทย์ประจำโรงพยาบาลยันฮี</li>
                    <li style={{marginBottom:'15px'}}>2558 จิตแพทย์ ประจำศูนย์จิตรักษ์โรงพยาบาลกรุงเทพสำนักงานใหญ่</li>
                </ul>
            </Box>

            <Box sx={{p:4,backgroundColor:'#FFF'}} mb={2} >
                <Typography  className='NotoSansThai' mb={2} component="div" sx={{ fontWeight:600,fontSize:18 }}>
                ประวัติการทำงาน
                </Typography>
                <ul>
                    <li style={{marginBottom:'15px'}}>เป็นผู้เชี่ยวชาญด้านการประเมินปัญหาเพศสภาพก่อนผ่าตัด แก้ไขอัตลักษณ์ทางเพศ (ผ่าตัดแปลงเพศ)</li>
                    <li style={{marginBottom:'15px'}}>เป็นวิทยากรอบรมด้านการให้คำปรึกษาในการบำบัดสารเสพติดให้กับบุคคลากรในคลินิกฟ้าใส (คลินิกด้านสุขภาพจิต และสารเสพติด) จากโรงพยาบาลต่าง ๆ ทั่วประเทศ</li>
                    <li style={{marginBottom:'15px'}}>เป็นวิทยากรรับเชิญไปให้ความรู้แก่สมาคมหญิงไทยในต่างประเทศ</li>
                    <li style={{marginBottom:'15px'}}>เป็นวิทยากรจัดกิจกรรมส่งเสริมสุขภาพจิต ให้แก่ บริษัทและองค์กรชั้นนำต่าง ๆ อาทิ บริษัทการบินกรุงเทพ (Bangkok Airway) , ปตท., อมตะ , เครือซีเมนต์ไทย , มิชลิน , DHL , กระทรวงยุติธรรม ฯลฯ</li>
                    <li style={{marginBottom:'15px'}}>เป็นวิทยากรอบรมเรื่องการจัดการภาวะฉุกเฉินทางจิตเวชให้กับโรงพยาบาลในเครือ BDMS ทั่วประเทศ</li>
                    <li style={{marginBottom:'15px'}}>เป็นที่ปรึกษาให้ความรู้ด้านจิตเวช สำหรับการสร้างละคร และภาพยนต์</li>
                </ul>
            </Box>

            <Box sx={{px:4,backgroundColor:'#FFF'}} pb={6}  pt={4} >
                <Typography  className='NotoSansThai' mb={2} component="div" sx={{ fontWeight:600,fontSize:18 }}>
                    ตารางเวลาสำหรับนัดหมายล่วงหน้า
                </Typography>

                <Box mb={2} >
                    <Typography  className='NotoSansThai'  component="div" sx={{ fontWeight:600,fontSize:18 }}>
                        อาทิตย์
                    </Typography>
                    <Typography  className='NotoSansThai'  component="div">
                        11:00 - 17:00 น.
                    </Typography>
                    <Typography  className='NotoSansThai'  component="div">
                        18:00 - 21:00 น.
                    </Typography>
                </Box>

                <Box mb={2} >
                    <Typography  className='NotoSansThai'  component="div" sx={{ fontWeight:600,fontSize:18 }}>
                        จันทร์
                    </Typography>
                    <Typography  className='NotoSansThai'  component="div">
                        12:00 - 14:00 น.
                    </Typography>
                </Box>
                
                <Box mb={3} >
                    <Typography  className='NotoSansThai'  component="div" sx={{ fontWeight:600,fontSize:18 }}>
                        อังคาร
                    </Typography>
                    <Typography  className='NotoSansThai'  component="div">
                        12:00 - 14:00 น.
                    </Typography>
                </Box>

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
                    onClick={() => setDrawerOpen(true)}
                >ปรึกษา </Button>

            </Box>

            <Drawer
           
            anchor="bottom"
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            >
                <Box className="bxbot" >

                    
                    <Box p={4} >
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker label="เวลา" sx={{width:'100%'}} />
                            </DemoContainer>
                        </LocalizationProvider>
                        <Box pt={4}>
                            <Button 
                                variant="contained"  
                                type="submit"
                                fullWidth
                                className='NotoSansThai'
                                sx={{ 
                                    borderRadius: 50 ,
                                    backgroundColor:'#461E99',
                                    padding:'14px 32px',
                                    fontSize:'16px',
                                }}

                            >ยืนยันการนัดหมาย </Button>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
    

        </Box>
    );
}