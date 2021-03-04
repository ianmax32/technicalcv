import React from 'react'
import styled from 'styled-components'
import Project from './Project'

function Portfolio() {
    return (
        <PortfolioMain>
            <h1 className="text-white text-center">Portfolio</h1>
            <div>
                <Project 
                src1='./projects/android/home.png'
                src2='./projects/android/signin.png'
                src3='./projects/android/account.png'
                src4='./projects/android/transfer.png'
                src5='./projects/android/aftertranfer.png'
                description='This is my first android project were i created a bank up with android and java'
                gitLink='https://github.com/ianmax32/Bank-Android-Application.git'/>
            </div>

            <div>
            <Project 
                src1='./projects/forum/first.png'
                src2='./projects/forum/home.png'
                src3='./projects/forum/forth.png'
                src4='./projects/forum/fifthy.png'
                src5='./projects/forum/thread.png'
                description='This is a forum to post questions made from react'
                gitLink='https://github.com/ianmax32/Forum.git'/>
            
            </div>

            <div>
            <Project 
                src1='./projects/sab/welcome screen.png'
                src2='./projects/sab/management add customer.png'
                src3='./projects/sab/management add information.png'
                src4='./projects/sab/add product.jpg'
                src5='./projects/sab/output.png'
                description='This is a desktop app for stock tracking made from the use of c# and mysql'
                gitLink='https://github.com/ianmax32/Group11-Aviator-SAB-Stock-Tracking-System.git'/>
            
            </div>

            <div>
            <Project 
                src1='./projects/techcv/home.png'
                src2='./projects/techcv/about.png'
                src3='./projects/techcv/port.png'
                src4='./projects/techcv/cont.png'
                src5='./projects/techcv/port.png'
                description='This is a techincal cv made from the use or react and styled components'
                gitLink='https://github.com/ianmax32/technicalcv.git'/>
            
            </div>

            <div>
            <Project 
                src1='./projects/book shop/first.png'
                src2='./projects/book shop/second.png'
                src3='./projects/book shop/third.png'
                src4='./projects/book shop/first.png'
                src5='./projects/book shop/third.png'
                description='This is a java desktop application made by using core java, javafx and mysql to host the books in the database'
                gitLink='https://github.com/ianmax32/Book-Shop.git'/>
            
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