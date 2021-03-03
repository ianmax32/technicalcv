import React from 'react'
import styled from 'styled-components';

function Project(props) {
    return (
        <ProjectMain>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                
                    <ImageCoures>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block" src={props.src1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={props.src2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={props.src3} alt="Third slide" />
                        </div>
                        </div>
                    </ImageCoures>
                
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <p>Github link{props.gitLink}</p>
            </div>
        </ProjectMain>
    )
}

export default Project;
const ProjectMain = styled.div`
    padding:10px;
    color:white;
    margin:auto;
    text-align:center;
`;

const ImageCoures = styled.div`
    >div >div >img {
        border-radius:20px;
        padding:5px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
`;
