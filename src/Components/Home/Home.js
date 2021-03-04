import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

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
            <Link to='/contact' className='btn text-white'><FontAwesomeIcon icon={faEnvelopeSquare}/> Get in touch</Link>
            </ButtonLink>

            <HomeCoures>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="rounded-10 mx-auto d-block w-50" src="./java.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./csharp.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./asp.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./android.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./css.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./javaee.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./javascript.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./react.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-10 mx-auto d-block w-50" src="./HTML5.png" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </HomeCoures>
        </HomeMain>
        
    )
}

export default Home
const HomeMain = styled.div`
    background-image:url('./homebackground.jpg');
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 670px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    color:white;
    text-align:center;
    height:grid-auto-columns;
   
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

const HomeCoures = styled.div`
    >div >div >div{
        border-radius:5px;
    }
    >div >div >div >img{
        width: 200px;
        height: 300px; 
        margin:5px;
        object-fit:contain;
    }
`;