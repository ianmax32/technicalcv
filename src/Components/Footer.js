import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {FaFacebookSquare, FaInstagram,FaGithub,FaLinkedinIn} from 'react-icons/fa'

function Footer() {
    return (
        <FooterMain>
            <div className="p-0" md={3} sm={12}>
                Email : <a href="mailto:masagaian32@gmail.com">masagaian32@gmail.com</a><br/>
                <a href='https://www.facebook.com/profile.php?id=100009938568919' className="m-1"><FaFacebookSquare /></a>
                <a href='https://www.instagram.com/ianmax32/' className="m-1"><FaInstagram /></a>
                <a href='https://github.com/ianmax32' className="m-1"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/ian-masaga-059b64183/' className="m-1"><FaLinkedinIn /></a>
            </div>
            <div className="p-0" md={3} >
                Address : <p>12 Palm street The Orchards Pretoria North</p>
            </div>
            <div className="p-0 d-flex justify-content-end" md={3}>
                This site was created by Ian Masaga
            </div>
        </FooterMain>
    )
}

export default Footer
const FooterMain = styled.footer`
    background-color:#2d3045;
    color:white;
    width: 100%;
    height: 65px;
    position: relative;
    margin:0;
    bottom: 0px;
    display:flex;
    justify-content:space-around;
    @media screen and (max-width:500px){
        height:15vh;
        
    }
`;