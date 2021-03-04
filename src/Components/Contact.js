import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookf,faInstagram } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            disabled:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    
    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]:value
        })
    }
    

    handleSubmit(e){
        e.preventDefault();
        this.sendEmail(e);
        e.target.reset();
        this.setState({
            name:'',
            email:'',
            message:'',
            disabled:true
        })
        alert('Email has been sent.');
    }

    sendEmail(e){
        emailjs.sendForm(`service_kvppv3p`, 'template_eoxcj8b', e.target, `user_Sxnj17gpr1eMNmOa2XmAu`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    render() {
        return(
            <ContactMain>
            <h1 className='text-center'>Contact Me</h1>
            <form onSubmit={this.handleSubmit}>
            <input className='form-control m-3' name="name" type='text' placeholder='Full Name' value={this.state.name} onChange={this.handleChange}/>
            <input className='form-control m-3' name='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
            <input className='input-field form-control m-3' name='message' type='text' placeholder='Enter your message here' value={this.state.message} onChange={this.handleChange}/>
            <button className='btn btn-primary d-inline-block' type='submit'>Submit</button>
            </form>

            
        </ContactMain>
        
        )
    }
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