
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';


export function HistoryPage() {

    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{backgroundColor:'#F6F6F6'}}>
            <AppBar position="relative" sx={{backgroundColor:'#FFF',color:'#000',boxShadow:'unset',paddingTop:'10px'}}>
                <Toolbar>
                    <Typography  className='NotoSansThai' component="div" sx={{ flexGrow: 1,textAlign:'center',fontWeight:600,fontSize:18 }}>
                        ประวัติ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#27AE60'}}>
                            <CheckSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                                ใช้บริการแล้ว
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#FF7D45'}}>
                            <TimerSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            จอง
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#27AE60'}}>
                            <CheckSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                                ใช้บริการแล้ว
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#27AE60'}}>
                            <CheckSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                                ใช้บริการแล้ว
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#FF7D45'}}>
                            <TimerSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            จอง
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>
            <Box sx={{px:3,pt:2,pb:2,backgroundColor:'#FFF'}} mb={1} >
                <Stack spacing={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={2} mb={3} direction="row" alignItems="center" sx={{color:'#461E99'}}>
                        <CalendarMonthIcon />
                        <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                            24 ก.ย. 66  12.00 น.
                        </Typography>
                    </Stack>
                    <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{fontSize:14,color:'#656565' }}>
                        หมายเลขนัดหมาย: 12345
                    </Typography>
                </Stack>
                <Stack spacing={2} mb={2} direction="row" alignItems="start">
                    <Avatar
                        alt=""
                        src="/images/expert1.png"
                        sx={{ width: 64, height: 64 }}
                    />
                    <div>
                        <Typography  className='NotoSansThai' mb={1}  component="div"  sx={{ fontWeight:600,fontSize:16,color:'#2C2C2C' }}>
                            พญ.สุชาดา นันทพินิจ
                        </Typography>
                        <Typography  className='NotoSansThai'   mb={1}  component="div"  sx={{ fontSize:13,color:"#656565" }}>
                         จิตแพทย์
                        </Typography>
                        <Stack spacing={2}  direction="row" alignItems="center" sx={{color:'#27AE60'}}>
                            <CheckSharpIcon />
                            <Typography  className='NotoSansThai'  component="div"  sx={{ fontWeight:600,fontSize:16,paddingTop:'4px' }}>
                                ใช้บริการแล้ว
                            </Typography>
                        </Stack>
        
                    </div>
                </Stack>
                
            </Box>

           
        </Box>
    );
}