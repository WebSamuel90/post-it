import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
import BackButton from '../components/BackButton';
import PlusButton from '../components/PlusButton';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { firestore } from 'firebase';
import { withRouter } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';

const BoardStyled = styled.div`
    width: 1500px;
    height: 1000px;
    // transform: perspective(200px) translate3d(0, 0, -100em);
`;

const NavBoardStyled = styled.div`
    position: fixed;
    top: 25px;
    left: 50%;
    z-index: 5;

    @media screen and (max-width: 768px) {

    }
`;

const ModalButtonPlacement = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;
    position: fixed;
    top: 90%;
    align-items: center;
    // margin-bottom: 50px;
`;

const ModalButton = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-bottom: 50px;
    visibility: hidden;
    fill: var(--main-font-color);
    // position: absolute;

    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`;

const H2Position = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    flex-direction: row;
`;
const H2 = styled.h2`
    font-family: 'Happy Monkey', sans-serif;
    position: fixed;
    top: 4%;
    // left: 50%;
    z-index: 5;
`;


const Board = (props) => {
    const [openButton, setOpenButton] = useState(false)

    const getBoardId = props.match.params.id;
    
    const [value, loading, error] = useDocument(
        firestore().doc(`boards/${getBoardId}`)
    );
    
    const currentBoardId = value && value.id;
    // const currentBoardName = value && value.data().boardName;
    
    return (
        <>
            <BackButton />
            <Navbar backgroundColor="var(--main-div-color)"/> 
            <H2Position>
                <H2>{currentBoardId}</H2>
            </H2Position>
                <Notes boardId={currentBoardId} />
      
            {openButton && <Modal onClose={() => setOpenButton(false)} />}

            <ModalButtonPlacement>
                <PlusButton src={openButton === false ? '../assets/imgs/plus.svg' : null} name="modal" onClick={() => setOpenButton(true)}></PlusButton>
            </ModalButtonPlacement>
        </>
    )
}

export default withRouter(Board);