import React from 'react'
import styled from 'styled-components'
import Project from './Project'

function Portfolio() {
    return (
        <PortfolioMain>
            <h1 className="text-white text-center">Portfolio</h1>
            <div>
                <Project src1='./contactbackground.jpg' src2='./Aboutbackground.jpg' description='this is the first project'/>
            </div>
        </PortfolioMain>
    )
}

export default Portfolio
const PortfolioMain = styled.div`
    background-image: url('./portfolio.png');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
`;