
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  useNavigate 
} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Chat from './chat'
import { useLogto } from '@logto/react';
import {orgId, apiUrl,base_url} from '../../configs/app';
import axios from 'axios';

export function LoginPage() {
    const navigate = useNavigate();
    const { isAuthenticated, fetchUserInfo, signIn } = useLogto();
    const [email, setEmail] = useState("");

    useEffect(() => {
      const user = ReactSession.get("user");
        if(user) {
          // navigate('/home')
        }

        (async () => {
          if (isAuthenticated) {
            const userInfo = await fetchUserInfo();
            // console.log(userInfo)
            // setEmail = userInfo.username;
            await setEmail(userInfo.sub)
            createUser();
        }
      })();
    }, []);

    const createUser = async () => {
      try {
        let response = await axios.post(apiUrl + '/api/user', {email: email, organization_id: orgId});
        response = response.data.data;
        if(response!=null) {
          await ReactSession.set("user", response);
          if(response.is_pdpa_accepted == 1) {
            // console.log('redirect to home', response);
            navigate('/home');
          } else {
            // console.log('redirect to term', response);
            navigate('/terms');
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <Stack sx={{mx:3,height: "100vh", justifyContent: "center", flexDirection: "column"}} spacing={5}>
        <Chat disabled={true}/>
        <Box
          component="img"
          sx={{
            width: '35%',
            paddingBottom: '25px',
            alignSelf: 'center'
          }}
          src="/images/logo3.png"
        />
        {!isAuthenticated && (
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
                onClick={() => signIn(base_url+'/callback')}
              >เข้าสู่ระบบ</Button>
        )}
    </Stack>
  );
}