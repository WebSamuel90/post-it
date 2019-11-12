import React, { useState } from 'react';
import Modal from '../components/Modal';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
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
    background-color: pink;
    
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
    transform: scale(0.5);
    overflow: hidden;
    border: 1px solid black;

    @media screen and (max-width: 768px) {
        width: 700px;
        height: 100vh;
        transform: scale(0.5);

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

const User = () => {
    const [openButton, setOpenButton] = useState(false)

        return (
            <>
            <Link to='/'><BackButton img="assets/imgs/left.png"/></Link>
               <Navbar />
                    <WrapperStyled id="background">
                        <H1>User page</H1>
                            <NotesPlacement>
                                <Notes />
                                    </NotesPlacement>
                                {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)}>
                            </Modal>}
                        <ModalButton src={openButton === false ? "assets/imgs/plus.png" : null} name="modal" onClick={() => setOpenButton(true)}></ModalButton>
                </WrapperStyled>
            
            </>
        
        );
    }

export default User;