import React from 'react';
import { firestore } from '../firebase';
import styled from 'styled-components';

const NoteStyled = styled.div`
    padding: 15px 25px;
    width: 250px;
    height: 150px;
    border: 1px solid black;
    background-color: yellow;
    margin-top: 15px;
    cursor: pointer;
    margin-bottom: 15px;
`;

const Note = ({ id, content, likes, user }) => {
    
    const noteRef = firestore.doc(`notes/${id}`);
    const remove = () => noteRef.delete();
    const like = () => noteRef.update({ likes: likes + 1 });

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return ( 
        <>
            <NoteStyled
                id={id}
                draggable= {true}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <p>{content}</p>
                <p>{likes == 0 ? null : likes}</p>
                <button className="like" onClick={like}>Like</button>
                <button className="delete" onClick={remove}>X</button>
            </NoteStyled>
        </>
     );
};

 
export default Note;
