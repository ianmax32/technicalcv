import React from 'react';
import styled from 'styled-components'

function About() {
    return (
        <div>
            
            <AboutMain>
                <h1>SUMMARY</h1>
                <p>
                I am a talented individual with strong communication skills, team spirit, and 
                currently in my final year, major in BSc in Information Technology hoping to gain 
                experience on the position of Software Developer. Bringing expertise in writing
                 full-stack code to support multiple platforms, including web, android, and 
                desktop applications, and a solid grasp of data structures and object- oriented designs.
                </p>
                <p>INTERESTS</p>
                <p>
                    <ul>
                        <li>
                        <p>Taking part on code challenges on hackerearth.</p>
                        </li>
                        <li>
                        Creating software that people would use. 
                        </li>
                        <li>
                        Mobile Development. 
                        </li>
                    </ul>
                </p>

                <h1>EDUCATION</h1>
                <ul>
                    <li>North West University, Vaal Triangle Campus (Present Final Year)</li>
                    <li>Victoria High School</li>
                    <li>Mazoe Boys High School</li>
                
                </ul>

                <h1>EXPERIENCE</h1>
                
            </AboutMain>
        </div>
    )
}

export default About
const AboutMain = styled.div`

`;