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
    
    const [value] = useDocument(
        firestore().doc(`boards/${getBoardId}`)
    );
    
    const currentBoardId = value && value.id;
    // const currentBoardName = value && value.data().boardName;
    
    return (
        <>
            <BackButton />
            <H2Position>
                <H2>{currentBoardId}</H2>
            </H2Position>
            <Navbar boardId={currentBoardId} backgroundColor="var(--main-div-color)"/> 
            <Notes boardId={currentBoardId} />
      
            {openButton && <Modal onClose={() => setOpenButton(false)} />}

            <ModalButtonPlacement>
                <PlusButton name="modal" onClick={() => setOpenButton(true)}></PlusButton>
            </ModalButtonPlacement>
        </>
    )
}

export default withRouter(Board);