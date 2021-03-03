import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Home() {
    return (
        <HomeMain>
            <h5>Hi , i am</h5>
            <h1>Ian Masaga</h1>
            <h3>Final year BSc IT Student</h3>
            <p className='pb-15'>I am a talented individual with strong communication skills, team spirit, and currently in
            my final year, major in BSc in Information Technology hoping to gain experience on the 
            position of Software Developer. Bringing expertise in writing full-stack code to support multiple platforms, 
            including web, android, and desktop applications, and a solid grasp of data structures and object- oriented designs</p>
            <ButtonLink>
            <Link to='/contact' className='btn text-white'>Get in touch</Link>
            </ButtonLink>

            
        </HomeMain>
        
    )
}

export default Home
const HomeMain = styled.div`
    background-image:url('./homebackground.jpg');
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 570px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    color:white;
    padding:20px;
    text-align:center;
    
    >h5{
        color:limegreen;
    }

`;


const ButtonLink = styled.button`
    background-color:limegreen;
    color: white;
    border-radius:5px;
    margin-top:35px;
    &:hover{
        background-color:transparent;
        color:white;
    }
`;
