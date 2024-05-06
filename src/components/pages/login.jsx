
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  useNavigate 
} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Chat from './chat'
import {orgID, apiUrl, base_url, supabase_client, supabase_secret } from '../../configs/app';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

const supabase = createClient(supabase_client, supabase_secret);

export function LoginPage() {
    const navigate = useNavigate();
    // const { isAuthenticated, fetchUserInfo, signIn } = useState({});
    const [session, setSession] = useState(null)

    useEffect(() => {
      if(ReactSession.get('user')) {
        navigate('/home')
      }

      supabase.auth.getSession().then(async ({ data: { session } }) => {
        if(session !== null) {
          await setSession(session)
          createUser(session.user.email);
        }
      })
      
      // const {
      //   data: { subscription },
      // } = supabase.auth.onAuthStateChange(async (_event, session) => {
      //   await setSession(session)
      // })
      // return () => subscription.unsubscribe()
    }, [supabase]);

    const createUser = async (email) => {
      try {
        let response = await axios.post(apiUrl + '/api/user', {email: email, organization_id: orgID});
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
        {!session ? (
            <Auth
            appearance={{
              theme: "ThemeSupa",
              extend: true,
              className: {
                anchor: 'NotoSansThai'
              },
              style: {
                button: {
                  borderRadius: '50px',
                  background: '#ffffff',
                  color: 'rgb(70, 30, 153)',
                  width: '100%',
                  padding: '16px 32px',
                  fontSize: '16px',
                  border: '1px solid rgb(201 201 201)',
                  boxShadow: '3px 3px 4px #0000001c',
                  marginBottom: '10px'
                }
              }
            }}
            redirectTo={base_url}
            supabaseClient={supabase} 
            onlyThirdPartyProviders={true} 
            providers={['azure']} />
        ) : (
          <Box style={{alignSelf: 'center', textAlign: 'center', width: '100%'}}>
            Loading...
          </Box>
        )}
    </Stack>
  );
}