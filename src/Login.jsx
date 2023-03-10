import React, {useState } from "react";

export const Login = (props) => {
    const [email,setEmail] =useState('');
    const [pass, setPass] =useState('');
    const [id, setId] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    

   
    return(
        <div className ="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email"> E-mail </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password"> Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <label htmlfor="id"> Administrator ID </label>
            <input value={id} onChange={(e) => setId(e.target.value)} type="id" placeholder="********" id="id" name="id"/>
            <button type="submit">Log In</button>
            
        </form>
        <button className="link-btn"  onClick={() => props.onFormSwitch('home')}>You are not and administrator? Click here to Skip this part.</button>
        </div>
    )
}