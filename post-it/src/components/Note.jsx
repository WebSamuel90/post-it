import React from 'react';
import { firestore } from '../firebase';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const NoteStyled = styled.div`
    padding: 15px 25px;
    box-shadow: 2px 4px 6px #444;
    background-color: ${props => props.postitColor};
    height:10em;
    width:10em;
    padding:1em;
    margin: 10px;
    cursor: pointer;
    position: absolute;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 50px;
    }
`;
    
const Note = ({id, content, likes, xPos, yPos, postitColor, boardId}) => {
    const noteRef = firestore.collection('boards').doc(`${boardId}`).collection('notes').doc(`${id}`)
    const remove = () => noteRef.delete();
    const like = () => noteRef.update({ likes: likes + 1 });
    
    const handleOnstop = (event, data) => {
        
        noteRef.update({ xPos: data.x, yPos: data.y });

    };

    return ( 
        <Draggable onStop={handleOnstop} position={{x: xPos, y: yPos}}>
            <NoteStyled {...{postitColor}}>
                <p>{content}</p>
                <p>{likes === 0 ? null : likes}</p>
                <button className="like" onClick={like}>Like</button>
                <button className="delete" onClick={remove}>X</button>
            </NoteStyled>
        </Draggable>
     );
};
 
export default Note;
