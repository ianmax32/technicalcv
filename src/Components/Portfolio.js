import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import {data} from './myprojects'

function Portfolio() {
    return (
        <PortfolioMain>
            {data.map((data,item)=>{
                console.log(data.description);
               return(
                <Project 
                src1={data.src1}
                src2={data.src2}
                src3={data.src3}
                src4={data.src4}
                src5={data.src5}
                description={data.description}
                gitLink={data.gitLink}
            />
               )
            })
            }
            
             
            
        </PortfolioMain>
    )
}

export default Portfolio
const PortfolioMain = styled.div`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
`;