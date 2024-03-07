import * as React from 'react';
import { Html } from '@react-email/html';

export default function Email(props) {
  const { msg } = props;

  return (
    <Html lang="en">
      <div style="text-align: center">
        <img src="https://corp.synzofficial.com/images/logo.png" alt="synz" style="height: 64px" />
        <div style="font-family:Arial, Helvetica, sans-serif;padding: 10px;background-color: #eee;width: 80%;margin: 10 auto;border-radius: 10px;padding: 10px 20px;">{msg}</div>
        <br/>
        <small style="font-family:Arial, Helvetica, sans-serif;color: gray;">&copy; Copyright @ 2022 by NSD Neuron Co.,Ltd.</small>
      </div>
    </Html>
  );
}