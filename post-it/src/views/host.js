import React, { Component } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';

import Navbar from '../components/Navbar';
import Notes from "../components/Notes";
import Authentication from '../components/Authentication';


const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aqua;
    width: 1000px;
    height: 1000px;
    overflow: hidden;
    margin: 25px;
    padding: 15px;
    transform: scale(0.5);
    border: red solid 2px;
    
`;

const PostitWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: pink;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: blue solid 2px;

`;

const Host = () => {
//    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)

// const colors = {
  //  Green: '#39D1B4',
   // Yellow:'#ffc',
 //   Pink: '#FFB6C1',
  //  Blue: '#ADD8E6'
// }

        return (
            <>
                
                <h1>Host page</h1>
                <Navbar />

            
            <PostitWrapperStyled>

                <Notes />

            </PostitWrapperStyled>
        
        </>
    );
}


export default Host;
