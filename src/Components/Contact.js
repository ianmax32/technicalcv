import React from 'react'
import styled from 'styled-components'
function Contact() {
    return (
        <ContactMain>
            <h1 className='text-center'>Contact Me</h1>
            <form>
            <input className='form-control m-3' type='text' placeholder='Full Name'/>
            <input className='form-control m-3' type='email' placeholder='Email'/>
            <input className='input-field form-control m-3' type='text' placeholder='Enter your message here'/>
            <button className='btn btn-primary d-inline-block' type='submit'>Submit</button>
            </form>
        </ContactMain>
    )
}

export default Contact
const ContactMain = styled.div`
    margin:1px;
    height: 100%;
    position: relative;
    background-image:url('./contactbackground.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    color:white;
    border-radius:15px;
    padding-bottom:10px;
    box-shadow:10px 10px 5px #bfbfbf;
     
    >form{
        margin-left: 15%;
        margin-right:15%;
        width: 70%; 
    }

    >form >button{
        margin-left:20vh;
    }

    >form >button:hover{
        background-color:gray;
        transform:rotateY('50deg');
        width:300px;
    }

    >form >input.input-field{
        height:350px;
        padding-top:2px;
        padding-bottom:300px;
    }
`;