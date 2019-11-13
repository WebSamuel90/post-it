import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
import BackButton from '../components/BackButton';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { firestore } from 'firebase';
import { withRouter } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';

const BoardStyled = styled.div`
    width: 1500px;
    height: 1000px;
    // transform: perspective(200px) translate3d(0, 0, -100em);
`;

const NavBoardStyled = styled.div`
    position: fixed;
    left: 50%;
    z-index: 5;
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

const H2 = styled.h2`
    font-family: 'Happy Monkey', sans-serif;
`;

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

const Board = (props) => {
    const [openButton, setOpenButton] = useState(false)

    const getBoardId = props.match.params.id;
    
    const [value, loading, error] = useDocument(
        firestore().doc(`boards/${getBoardId}`)
    );
    
    const currentBoardId = value && value.id;
    const currentBoardName = value && value.data().boardName;
    
    return (
        <BoardPosition>
            <BackButton img="../assets/imgs/left.png"/>
            {/* {host === true ? <Navbar /> : <MemberAddNote />} */}
                <Navbar backgroundColor="var(--main-div-color)"/> 
                    <BoardWrapperStyled>
                        <H2>{currentBoardName}</H2>
                            <H2>{currentBoardId}</H2>
                                {/* <MemberAddNote /> */}
                                <Notes boardId={currentBoardId} />
                            </BoardWrapperStyled>
                            {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)}>
                        </Modal>}
                    <ModalButtonPlacement>
                <ModalButton src={openButton === false ? "../assets/imgs/plus.png" : null} name="modal" onClick={() => setOpenButton(true)}></ModalButton>
            </ModalButtonPlacement>
        </BoardPosition>
    )
}

export default withRouter(Board);