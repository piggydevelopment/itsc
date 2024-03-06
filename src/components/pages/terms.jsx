
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { MuiOtpInput } from 'mui-one-time-password-input'
import Typography from '@mui/material/Typography';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams 
} from "react-router-dom";


export function TermsPage() {



    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" sx={{backgroundColor:'#FFF',color:'#000',boxShadow:'unset',paddingTop:'10px'}}>
          <Toolbar>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2,position:"absolute" }}
              component={Link} to="/"
            >
              <ArrowBackIosNewOutlinedIcon />
            </IconButton>
            
            <Typography  className='NotoSansThai' component="div" sx={{ flexGrow: 1,textAlign:'center',fontWeight:600,fontSize:18 }}>
                เงื่อนไขและข้อตกลงในการใช้บริการ
            </Typography>
          </Toolbar>
        </AppBar>
        <Box  sx={{px:3,py:2}}>
            <div className="texts1">
                การใช้ช่องทางการให้บริการของ Synz อยู่ภายใต้เงื่อนไขว่า
                คุณตกลงยอมรับข้อตกลงและเงื่อนไขการใช้บริการต่าง ๆ ที่กำหนดไว้ การใช้ช่องทางการให้บริการของ Synz การใช้ช่องทางการให้บริการของ Synz อยู่ภายใต้เงื่อนไขว่า
                คุณตกลงยอมรับข้อตกลงและเงื่อนไขการใช้บริการต่าง ๆ ที่กำหนดไว้ การใช้ช่องทางการให้บริการของ  Synz  ของคุณ ย่อมก่อให้เกิดความผูกพันและสัญญาตามกฎหมายดังระบุ
                ข้อตกลงและเงื่อนไขการใช้บริการทั้งหมด ซึ่งคุณได้อ่านและ
                ทำความเข้าใจในข้อตกลงและเงื่อนไขการใช้บริการแล้ว คุณยอมรับและตกลงที่จะผูกพันกับข้อตกลงและเงื่อนไขการใช้บริการเหล่านี้ 
            </div>
            <div className="texts1">
                หากคุณไม่ยอมรับหรือไม่สามารถปฏิบัติตามข้อตกลง
                และเงื่อนไขการใช้บริการนี้ คุณจะไม่สามารถใช้งานช่องทางการ
                ให้บริการของ Synz  หรือเข้าถึงเนื้อหาใด ๆ ได้ ของคุณ ย่อมก่อให้เกิดความผูกพันและสัญญาตามกฎหมายดังระบุข้อ
                ตกลงและเงื่อนไขการใช้บริการทั้งหมด ซึ่งคุณได้อ่านและ
                ทำความเข้าใจในข้อตกลงและเงื่อนไขการใช้บริการแล้ว คุณยอมรับและตกลงที่จะผูกพันกับข้อตกลงและเงื่อนไขการใช้บริการเหล่านี้ 
            </div>
        </Box>

        <Accordion sx={{boxShadow:'unset'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Term and Condition
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow:'unset'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            PDPA
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

    </Box>
    );
}