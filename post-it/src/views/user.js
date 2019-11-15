import React, { useState } from 'react';
import Modal from '../components/Modal';
import BackButton from '../components/BackButton';
import Notes from '../components/Notes';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'; 
// import ModalButton from '../components/ModalButton';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #F7FDFF;
    
    @media screen and (max-width: 768px) {
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: flex; 
        flex-direction: column;
    }
`;

const H1 = styled.h1`
    position: absolute; 
    top: 0; 
`; 

const NotesPlacement = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    transform: scale(0.7);
    overflow: hidden;
    border: 1px solid black;
    background-color: var(--main-bg-color);

    @media screen and (max-width: 768px) {
        width: 1200px;
        height: 100vh;
        transform: scale(0.3);

    }
`;

const ModalButton = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-bottom: 50px;
    visibility: hidden;

    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`;

const User = (props) => {
    const [openButton, setOpenButton] = useState(false)

    return (
        <>
            <BackButton img="assets/imgs/left.png"/>
            <Navbar backgroundColor="#333"/>
            
            <WrapperStyled id="background">
                <H1>User page</H1>
                <NotesPlacement>
                    <Notes />
                </NotesPlacement>

                {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)} />}

                <ModalButton src={openButton === false ? "assets/imgs/plus.png" : null} name="modal" onClick={() => setOpenButton(true)}></ModalButton>
            </WrapperStyled>
        </>
    );
}

export default User;