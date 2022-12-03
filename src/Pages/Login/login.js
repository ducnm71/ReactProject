import axios from "axios";
import React, { useState } from "react";
import * as Components from './Components';
import {ToastContainer, toast } from "react-toastify";

import './style.css';

const Login = () => {
    
    const [signIn, toggle] = React.useState(true);
    const [user, setUser] = React.useState({
       email: '',
       password: ''
    });
    const setParams = (e) => {
       if(e.target.name === 'email') {
           setUser({...user, email: e.target.value });
       }
       if(e.target.name === 'password') {
           setUser({...user, password: e.target.value });
       }
    }
    
    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    })

    const changeInfor = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    }
    const validate = () => {
        if(register.email.trim() === '' || register.password.trim() === '' || register.name.trim() === ''){
            toast.error('Please enter full name, email or password')
            return false
        }
        if(register.name.trim() > 20 && register.name.trim() < 3){
            toast.error('Name must be between 3 and 20 characters')
            return false
        }

        if(register.password.trim() !== register.cpassword.trim()){
            toast.error('Password invalid')
            return false
        }
        return true
    }

const submitFormLogin = async (e) => {
    e.preventDefault()
    await axios.get(`http://localhost:8000/user`)
          .then((response) => {
            console.log(response.data[0]);
            if(
                response.data.find(item => item.email === user.email && item.password === user.password)
            ){
                
                localStorage.setItem('name', response.data[0].name)
                localStorage.setItem('email', user.email)
                localStorage.setItem('id', response.data[0].id)
                localStorage.setItem('class',JSON.stringify(response.data[0].class))
                toast.success("Sign in successfully!");
                setTimeout(() =>{
                    window.location.replace("http://localhost:3000/")
                }, 1500)
                
            }
            else{
                toast.error("Email or password is incorrect")
            }
        })
}

const submitFormRegist = async (e) =>{
    e.preventDefault()
    let flag = validate()
    if(flag){
        await axios.post(`http://localhost:8000/user`,
                JSON.stringify({
                name: register.name,
                email: register.email,
                password: register.password
            })
        )
        .then(response =>{

                localStorage.setItem('name', response.data[0].name)
                localStorage.setItem('email', user.email)
                localStorage.setItem('id', response.data[0].id)
                localStorage.setItem('class',JSON.stringify(response.data[0].class))

                setTimeout(() => {
                    window.location.replace("http://localhost:3000/")
                }, 1500)
        })
    } 
    
}

    return(
        <div className="login-body">
          <Components.Container >
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form 
                  onSubmit={submitFormRegist}
                  >
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' name="name" placeholder='Name' required onChange={changeInfor} />
                      <Components.Input type='email' name="email" placeholder='Email' required onChange={changeInfor} />
                      <Components.Input type='password' name="password" placeholder='Password' required onChange={changeInfor} />
                      <Components.Input type='password' name="cpassword" placeholder=' Confirm password' required onChange={changeInfor} />
                      <Components.Button>Sign Up</Components.Button>
                      
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form 
                   onSubmit={submitFormLogin}
    
                   >
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' name="email" placeholder='mail' onChange={setParams} />
                       <Components.Input type='password' name="password" placeholder='Password' onChange={setParams} />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button 
                    //    onClick={notifyLogin} 
                       >Sigin In</Components.Button>
                      
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
              
          </Components.Container>
          <ToastContainer style={{fontSize: '18px'}}/>
          </div>
      )
}

export default Login