import React, { useState } from "react";
// import MicrosoftLogin from "react-microsoft-login";
// import {ms_app_id} from '../../configs/app';

export function MSLogin(props) {
  const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data, msal) => {

    if (!err && data) {
      onMsalInstanceChange(msal);
    }
  };

  return (
    <div></div>
  );
};