import React, {useEffect, useState} from 'react'
import { cs_token, cs_url } from '../../configs/app';
import { ReactSession } from 'react-client-session';
export default function Chat (props) {
  const {chatMsg} = props;
  const [user, setUser] = useState(ReactSession.get('user'));

  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", 
      locale: "th", 
      type: "expanded_bubble",
      launcherTitle: "คุยกับ Synz",
    };
      
    (function(d,t) {
      var BASE_URL = cs_url;
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);

      g.onload = function() {
        
        window.chatwootSDK.run({
          websiteToken: cs_token,
          baseUrl: BASE_URL
        })
        window.$chatwoot.setUser(user.id, {
            email: user.email,
            name: user.firstname + " " + user.lastname,
            phone_number: "+66"+user.phone_number,
            company_name: "EGAT-"+user.attribute_1+"-"+user.attribute_2 // with department
        });
        window.$chatwoot.setLabel("support-ticket");
        window.$chatwoot.setConversationCustomAttributes({
            productName: "Mobile number",
            productCategory: "+66"+user.phone_number,
          });
  
        
      }
    })(document, "script");
  }, []);

  return null;
};
