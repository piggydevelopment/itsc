import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ReactSession } from 'react-client-session';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import { psychiatricTreatmentOption, addicOption } from '../../configs/app';
import CancelIcon from "@mui/icons-material/Cancel";
import axios from 'axios';
import { apiUrl } from '../../configs/app';
import Snackbar from '@mui/material/Snackbar';
import {
    BrowserRouter as Router,
    useNavigate
} from "react-router-dom";


export const PersonalInformationForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(ReactSession.get('user'));
    const [selectedAddictions, setSelectedAddictions] = useState([]);
    const [formData, setFormData] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        occupation: 'รัฐวิสาหกิจ กฟผ.',
        dob: '',
        age: '',
        idNumber: '',
        phoneNumber: user.phone_number,
        pastTreatment: '',
        currentMedication: '',
        familyMentalHealthHistory: '',
        allergies: '',
        foodAllergies: '',
        emergencyContact: '',
        chronicDiseases: '',
        mainSymptoms: '',
        psychiatricTreatment: '',
        hospital: '',
        addiction: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: บันทึกข้อมูลและทำการนัดหมายแพทย์
    };

    const calculateAge = (e) => {
        let today = new Date();
        let birthDate = new Date(e.target.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setFormData({ ...formData, age: age });
    };

    return (
        <Box sx={{ backgroundColor: '#FFF', paddingBottom: '80px' }}>
            <AppBar position="relative" sx={{ backgroundColor: '#FFF', color: '#000', boxShadow: 'unset', paddingTop: '10px' }}>
                <Toolbar>
                    <Typography className='NotoSansThai' component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                        ข้อมูลเพิ่มเติมเพื่อการให้บริการ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit}
                pt={5}
            >
                <Stack sx={{ mx: 3 }} spacing={4}>
                    <TextField
                        label="ชื่อ"
                        name="firstname"
                        variant="standard"
                        value={formData.firstname}
                        className='NotoSansThai'
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="นามสกุล"
                        name="lastname"
                        variant="standard"
                        value={formData.lastname}
                        className='NotoSansThai'
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="อาชีพ"
                        name="occupation"
                        variant="standard"
                        value={formData.occupation}
                        className='NotoSansThai'
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="วัน/เดือน/ปีเกิด"
                        name="dob"
                        variant="standard"
                        value={formData.dob}
                        className='NotoSansThai'
                        onChange={(e) => [handleChange, calculateAge(e)]}
                        type="date"
                        required
                    />
                    <TextField
                        label="อายุ"
                        name="age"
                        variant="standard"
                        className='NotoSansThai'
                        value={formData.age}
                        onChange={handleChange}
                        disabled
                    />
                    <TextField
                        label="เลขประจำตัวประชาชน"
                        name="idNumber"
                        variant="standard"
                        className='NotoSansThai'
                        inputProps={{ maxLength: 13, pattern: "[0-9]{13}" }}
                        value={formData.idNumber}
                        onChange={handleChange}
                        type="tel"
                        required
                    />
                    <TextField
                        label="เบอร์โทรศัพท์"
                        name="phoneNumber"
                        variant="standard"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className='NotoSansThai'
                        type="tel"
                        inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
                        required
                    />

                    {/* Section Title */}
                    <h2 className='NotoSansThai'>ประวัติการรักษา</h2>

                    <TextField
                        label="เคยรับการรักษามาก่อนหรือไม่ ที่ไหน อย่างไร"
                        name="pastTreatment"
                        value={formData.pastTreatment}
                        onChange={handleChange}
                        className='NotoSansThai'
                        variant="standard"
                        multiline
                        minRows={2}
                    />
                    <TextField
                        label="ยาที่ใช้อยู่ ณ ปัจจุบัน"
                        name="currentMedication"
                        variant="standard"
                        value={formData.currentMedication}
                        onChange={handleChange}
                        className='NotoSansThai'
                        multiline
                        minRows={2}
                    />
                    <TextField
                        label="ประวัติการรักษาทางสุขภาพจิต ของคนในครอบครัว"
                        name="familyMentalHealthHistory"
                        variant="standard"
                        value={formData.familyMentalHealthHistory}
                        onChange={handleChange}
                        className='NotoSansThai'
                        multiline
                        minRows={2}
                    />

                    {/* Section Title */}
                    <h2 className='NotoSansThai'>ประวัติการแพ้</h2>

                    <TextField
                        label="ประวัติการแพ้ยา"
                        name="allergies"
                        variant="standard"
                        value={formData.allergies}
                        onChange={handleChange}
                        className='NotoSansThai'
                        multiline
                        minRows={2}
                        required
                    />
                    <TextField
                        label="ประวัติการแพ้อาหาร"
                        name="foodAllergies"
                        variant="standard"
                        value={formData.foodAllergies}
                        onChange={handleChange}
                        className='NotoSansThai'
                        multiline
                        minRows={2}
                    />

                    {/* Section Title */}
                    <h2 className='NotoSansThai'>ข้อมูลฉุกเฉิน</h2>

                    <TextField
                        label="เบอร์โทร บุคคลติดต่อกรณีฉุกเฉิน (ความสัมพันธ์)"
                        name="emergencyContact"
                        variant="standard"
                        value={formData.emergencyContact}
                        className='NotoSansThai'
                        onChange={handleChange}
                        required
                    />

                    {/* Section Title */}
                    <h2 className='NotoSansThai'>ข้อมูลสุขภาพ</h2>

                    <TextField
                        label="โรคประจำตัว"
                        name="chronicDiseases"
                        variant="standard"
                        value={formData.chronicDiseases}
                        onChange={handleChange}
                        className='NotoSansThai'
                        multiline
                        minRows={2}
                        required
                    />
                    <TextField
                        label="อาการสำคัญ ที่ต้องการปรึกษา"
                        name="mainSymptoms"
                        variant="standard"
                        value={formData.mainSymptoms}
                        className='NotoSansThai'
                        onChange={handleChange}
                        multiline
                        minRows={2}
                        required
                    />

                    {/* Section Title */}
                    <h2>ประวัติการรักษาทางจิตเวช</h2>
                    <FormControl fullWidth>
                        <InputLabel id="psychiatricTreatment-label">เคยรักษาทางจิตเวชมาก่อนหรือไม่?</InputLabel>
                        <Select
                            labelId="psychiatricTreatment-label"
                            id="psychiatricTreatment"
                            value={formData.psychiatricTreatment}
                            label="เคยรักษาทางจิตเวชมาก่อนหรือไม่?"
                            required={true}
                            variant='standard'
                            className='NotoSansThai'
                            defaultValue={formData.psychiatricTreatment}
                            onChange={(e) => setFormData({...formData, psychiatricTreatment: e.target.value})}
                        >
                            {psychiatricTreatmentOption.map((item) => (
                                <MenuItem key={item} value={item}
                                style={{fontFamily: "Noto Sans Thai",
                                display: 'block', padding: 10}}
                                >{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {formData.psychiatricTreatment === 'ใช่' && (
                        <TextField
                            label="โรงพยาบาล"
                            name="hospital"
                            variant='standard'
                            className='NotoSansThai'
                            value={formData.hospital}
                            onChange={handleChange}
                            required
                        />
                    )}

                    <FormControl fullWidth marginTop={20}>
                        <InputLabel>ประวัติการเสพติด</InputLabel>
                        <Select
                            value={selectedAddictions}
                            label="ประวัติการเสพติด *"
                            multiple
                            required={true}
                            variant='standard'
                            className='NotoSansThai'
                            style={{
                                borderBottom: "1px solid rgba(0, 0, 0, 0.43)",
                                padding: "10px",
                                outline: 0,
                                borderWidth: "0 0 1px 0",
                                borderRadius: 0
                            }}
                            defaultValue={selectedAddictions}
                            onChange={(e) => setSelectedAddictions(e.target.value)}
                            input={<OutlinedInput label="ประวัติการเสพติด *" variant='standard' className='NotoSansThai' />}
                            renderValue={(selected) => (
                                <Stack gap={1} direction="row" flexWrap="wrap">
                                    {selected.map((value) => (
                                        <Chip
                                            key={value}
                                            label={value}
                                            onDelete={() =>
                                                setSelectedAddictions(
                                                    selectedAddictions.filter((item) => item !== value)
                                                )
                                            }
                                            deleteIcon={
                                                <CancelIcon
                                                    onMouseDown={(event) => event.stopPropagation()}
                                                />
                                            }
                                        />
                                    ))}
                                </Stack>
                            )}
                        >
                            {addicOption.map((item) => (
                                <MenuItem key={item} value={item}
                                style={{fontFamily: "Noto Sans Thai",
                                display: 'block', padding: 10}}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button
                        variant="contained"
                        type="button"
                        fullWidth
                        className='NotoSansThai'
                        style={{
                            borderRadius: 50,
                            backgroundColor: '#461E99',
                            color: '#ffffff',
                            padding: '16px 32px',
                            fontSize: '16px',
                            marginTop: '40px',
                        }}>
                        บันทึก
                    </Button>
                    <Button
                        variant="contained"
                        type="button"
                        fullWidth
                        className='NotoSansThai secondaryButton'
                        onClick={() => {
                            // navigate back to previos screen
                            navigate(-1);
                        }}
                        style={{
                            borderRadius: 50,
                            backgroundColor: '#F6F6F6',
                            padding: '16px 32px',
                            fontSize: '16px',
                            color: '#656565',
                            boxShadow: 'unset',
                            marginTop: '20px'
                        }}>ยกเลิก</Button>
                </Stack>
            </Box>
        </Box>

    )
}
