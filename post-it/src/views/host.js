import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Notes from "../components/Notes";
import Authentication from '../components/Authentication';

const BoardPosition = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`; 

const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-bg-color);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    // margin: 25px;
    // padding: 15px;
    border: 1px solid black;
    // transform: scale(0.5);

    @media screen and (max-width: 768px) {
        width: 700px;
        // position: absolute;
        height: 100vh;
        transform: scale(0.5);
        // display: flex; 
        // flex-direction: column;
    }
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
        <BoardPosition>
        <Navbar />
            <BoardWrapperStyled>
                <h1>Host page</h1>
                    {/* <Navbar /> */}
                <Notes />
            </BoardWrapperStyled>
        </BoardPosition>
    );
}

export default Host;
