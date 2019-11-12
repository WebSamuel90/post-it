import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import MemberAddNote from '../components/MemberAddNote';
import Notes from '../components/Notes';
import { firestore } from 'firebase';
import { withRouter } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';

const Board = (props) => {

    const getBoardId = props.match.params.id;
    
    const [value, loading, error] = useDocument(
        firestore().doc(`boards/${getBoardId}`)
    );
    

    const currentBoardId = value && value.id;
    const currentBoardName = value && value.data().boardName;
    
    return (
        <>
            <h2>{currentBoardName}</h2>
            <h2>{currentBoardId}</h2>
            {/* {host === true ? <Navbar /> : <MemberAddNote />} */}
            <Navbar /> 
            {/* <MemberAddNote /> */}
            <Notes boardId={currentBoardId} />
        </>
    )
}

export default withRouter(Board);