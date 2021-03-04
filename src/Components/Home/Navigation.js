import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faAddressCard, faBriefcase, faEnvelopeSquare, faHome } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
    return (
        <div>
           <NavigationMain className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Ian Masaga</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse float-right" id="navbarTop">
                <div className="navbar-nav mr-auto">
                    <Link to='/' className="nav-item text-white nav-link p-3"><FontAwesomeIcon icon={faHome}/> Home</Link>
                    <Link to='/About' className="nav-item text-white nav-link p-3"><FontAwesomeIcon icon={faAddressCard}/> About</Link> 
                    <Link to='/Portfolio' className="nav-item text-white nav-link p-3"><FontAwesomeIcon icon={faBriefcase}/> Portfolio</Link> 
                    <Link to='/Contact' className="nav-item text-white nav-link p-3"><FontAwesomeIcon icon={faEnvelopeSquare}/> Contact</Link>    
                </div>
            </div>
            </NavigationMain> 
        </div>
    )
}

export default Navigation

const NavigationMain = styled.nav`
    &:hover{
        background-color:lightseagreen;
    }
`;