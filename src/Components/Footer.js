import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterMain>
            <div className="p-0" md={3} sm={12}>
                Email : <a href="masagaian32@gmail.com">masagaian32@gmail.com</a>
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
    
`;