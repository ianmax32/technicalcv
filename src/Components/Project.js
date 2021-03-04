import React,{useState} from 'react'
import styled from 'styled-components';

function Project(props) {
    return (
        <ProjectMain>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <ImageCoures>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block mx-auto" src={props.src1} alt="First slide"/>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block mx-auto" src={props.src2} alt="second slide"/>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block mx-auto" src={props.src3} alt="third slide"/>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block mx-auto" src={props.src4} alt="forth slide"/>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block" src={props.src5} alt="fifth slide"/>
                        </div>
                        
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </ImageCoures>
                    
                
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <p>Github link<a href={props.gitLink}> <button className='btn btn-outline-info'>View</button></a></p>
            </div>
        </ProjectMain>
    )
}

export default Project;
const ProjectMain = styled.div`
    padding:10px;
    color:black;
    margin:auto;
    text-align:center;
`;

const ImageCoures = styled.div`
    >div >div >img {
        border-radius:10px;
        padding:5px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 440px;
        object-fit:contain;
        
    }
`;
