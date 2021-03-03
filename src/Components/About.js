import React from 'react';
import styled from 'styled-components'

function About() {
    return (
        
            <AboutMain>
                <AboutInfo>
                    <h1>SUMMARY</h1>
                    <p>
                    I am a talented individual with strong communication skills, team spirit, and 
                    currently in my final year, major in BSc in Information Technology hoping to gain 
                    experience on the position of Software Developer. Bringing expertise in writing
                    full-stack code to support multiple platforms, including web, android, and 
                    desktop applications, and a solid grasp of data structures and object- oriented designs.
                    </p>
                </AboutInfo>
                <AboutInfo>
                <h1>INTERESTS</h1>
                <p>
                    <ul>
                        <li>
                        Taking part on code challenges on hackerearth.
                        </li>
                        <li>
                        Creating software that people would use. 
                        </li>
                        <li>
                        Mobile Development. 
                        </li>
                    </ul>
                </p>
                </AboutInfo>

                <AboutInfo>
                <h1>EDUCATION</h1>
                <ul>
                    <li>North West University, Vaal Triangle Campus (Present Final Year)</li>
                    <li>Victoria High School</li>
                    <li>Mazoe Boys High School</li>
                
                </ul>

                </AboutInfo>

                <AboutInfo>
                <h1>EXPERIENCE</h1>
                </AboutInfo>
                
            </AboutMain>
        
    )
}

export default About
const AboutMain = styled.div`
    background:url('./Aboutbackground.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    color:white;
    margin:1px;
    height:auto;
    border-radius:20px;
`;

const AboutInfo = styled.div`
    background-color:transparent;
    box-shadow: 10px 10px 5px #aaaaaa;
    border:1px solid #bfbfbf;
    padding: 10px;
    margin-bottom:15px;
    width:100%;
    margin-bottom:15px;
`;