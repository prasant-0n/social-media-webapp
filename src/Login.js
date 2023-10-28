import React from 'react';

import Divider from '@mui/material/Divider';


export default function Login() {
  return (
    <div>
      <h1>Facebook</h1>
      <h4>facebook helps you connect and share the people in your life.</h4>
      <div className='container'>
        <form action=""className='loginform'>
            
            <div>
            <section>
          <input type="text" placeholder='Email address or phone number'/>
            </section>
            <section>
          <input type="text" placeholder='Password'/>
            </section>
            <section>
            <button>Log in</button>
            </section>
            <section>
           <button disabled="disabled">Forgotten password?</button>
            </section>
            </div>
            <div>
                <button >Create New Account</button>
            </div>

        </form>
        <a href="https://www.facebook.com/pages/create/?ref_type=registration_form"><b>Create a Page</b> </a> for a celebrity,brand or business.
      </div>

    </div>
  )
}
