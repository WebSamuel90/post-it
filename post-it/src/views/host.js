import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Notes from "../components/Notes";
import Authentication from '../components/Authentication';

const BoardPosition = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`; 

const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: var(--main-bg-color);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    border: 1px solid black;

    @media screen and (max-width: 768px) {
        width: 1200px;
        height: 1553px;
        position: relative;
        height: 100vh;
        // left: 50px;
        transform: scale(0.3);
        transform: origin 0 0;
        // display: flex; 
        // flex-direction: column;
    }
`;

const ModalButtonPlacement = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    // margin-bottom: 50px;
`;

const ModalButton = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-bottom: 50px;
    visibility: hidden;
    // position: absolute;

    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`;


const Host = (props) => {
    const [openButton, setOpenButton] = useState(false)
//    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)

// const colors = {
  //  Green: '#39D1B4',
   // Yellow:'#ffc',
 //   Pink: '#FFB6C1',
  //  Blue: '#ADD8E6'
// }

    return (

    <BoardPosition>
        <Navbar backgroundColor="var(--main-div-color)"/>
        <BoardWrapperStyled>
            <h1>Host page</h1>
            <Notes />
        </BoardWrapperStyled>

        {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)} />}
        
        <ModalButtonPlacement>
            <ModalButton src={openButton === false ? "assets/imgs/plus.png" : null} name="modal" onClick={() => setOpenButton(true)}></ModalButton>
        </ModalButtonPlacement>
    </BoardPosition>
   
    );
}

export default Host;
