import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import { firestore } from '../firebase';
import Button from '../components/Button';
import styled from 'styled-components';
import shortid from 'shortid';
import { collectIdsAndDocs } from '../utilities';
import { useCollection } from 'react-firebase-hooks/firestore';

const WrapperStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Home = () => {

    const pageId = shortid.generate();
    const [insertId, setInsertId] = useState();
    const [joinBoard, setJoinBoard] = useState('');

    const [value, loading, error] = useCollection(
        firestore.collection('boards')
    );

    const boardRef = value && (value.docs.map(doc => doc.id))

    const handleChange = (e) => {
        e.preventDefault();
        setInsertId(e.target.value)
    }

    const handleCreate = () => {

        const board = {
            boardName: 'undefined',
            boardId: pageId,
        }

        firestore.collection('boards').doc(pageId).set(board)
    }

    const handleJoin = () => {
        const exists = boardRef.indexOf(insertId);

        if (exists > -1) {
            setJoinBoard(insertId)
        }   
    }

    return (
            <>
                <h1>Home page</h1>
                <WrapperStyled>
                    <Link to="/Host"><Button name="Host" /></Link>
                    <Link to="/User"><Button name="User" /></Link>
                    <input type="text" onChange={handleChange} ></input>
                    <Link to={joinBoard !== '' ? `board/${joinBoard}` : '/'} ><Button onClick={handleJoin} name="Join Board" /></Link>
                    <Link to={`/board/${pageId}`} ><Button onClick={handleCreate} name="Create Board" /></Link>
                </WrapperStyled>
            </>
        
        );
    }

export default Home;