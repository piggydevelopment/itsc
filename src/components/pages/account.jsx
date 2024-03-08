
import React, { useState, useEffect, Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate,
    useParams
} from "react-router-dom";

export function AccountPage() {
    const navigate = useNavigate();
    const [area, setArea] = React.useState('');
    const [department, setDepartment] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = e => {


    };

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value);
    };

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <Box sx={{ backgroundColor: '#FFF', paddingBottom: '80px', height: '100vh' }}>

            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                pt={5}
            >

                <Stack sx={{ mx: 3 }} spacing={4}>
                    <TextField
                        id=""
                        label="ชื่อ*"
                        variant="standard"
                        value={"วรรณพร"}
                    />
                    <TextField
                        id=""
                        label="นามสกุล*"
                        variant="standard"
                        value={"วงวรางค์"}
                    />
                    <TextField
                        id=""
                        label="อีเมล*"
                        variant="standard"
                        value={"sample@gmail.com"}
                    />
                    <TextField
                        id=""
                        label="เบอร์โทร*"
                        variant="standard"
                        value={"+66 123 456 789"}
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
                            borderRadius: 50,
                            backgroundColor: '#461E99',
                            padding: '16px 32px',
                            fontSize: '16px',
                        }}
                    >บันทึกข้อมูล   </Button>

                    <Stack sx={{ mx: 3 }} spacing={3} direction={'row'}>
                        <Button
                            variant="contained"
                            type="button"
                            fullWidth
                            className='NotoSansThai'
                            onClick={handleClickOpen}
                            sx={{
                                borderRadius: 50,
                                backgroundColor: '#F6F6F6',
                                padding: '16px 32px',
                                fontSize: '16px',
                                color: '#656565',
                                boxShadow: 'unset'
                            }}
                        >ยกเลิกสมาชิก   </Button>
                        <Button
                            variant="contained"
                            type="button"
                            fullWidth
                            className='NotoSansThai'
                            sx={{
                                borderRadius: 50,
                                backgroundColor: '#F6F6F6',
                                padding: '16px 32px',
                                fontSize: '16px',
                                color: '#656565',
                                boxShadow: 'unset'
                            }}
                            onClick={handleLogout}
                        >ออกจากระบบ   </Button>
                    </Stack>

                </Stack>

                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            </Box>

            
        </Box>
    );
}