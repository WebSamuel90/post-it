import React from 'react';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
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

const Board = (props) => {

    const getBoardId = props.match.params.id;
    
    const [value, loading, error] = useDocument(
        firestore().doc(`boards/${getBoardId}`)
    );
    
    const currentBoardId = value && value.id;
    const currentBoardName = value && value.data().boardName;
    
    return (
        <>
            <NavBoardStyled>
                <h2>{currentBoardName}</h2>
                <h2>{currentBoardId}</h2>
                <Navbar /> 
            </NavBoardStyled>
            <BoardStyled>
                <Notes boardId={currentBoardId} />
            </BoardStyled>
        </>
    )
}

export default withRouter(Board);