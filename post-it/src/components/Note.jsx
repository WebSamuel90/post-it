import React, { useState, useRef, useEffect, createRef } from 'react';
import { firestore } from '../firebase';
import styled from 'styled-components';
import DraggableCore from 'react-draggable';

const Note = ({ id, content, likes, xPos, yPos}) => {

    const NoteStyled = styled.div`
        padding: 15px 25px;
        box-shadow: 2px 4px 6px #444;
        background-color: #ffc;
        position: absolute;
        top: ${yPos}px;
        left: ${xPos}px;
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

    const noteRef = firestore.doc(`notes/${id}`);
    const remove = () => noteRef.delete();
    const like = () => noteRef.update({ likes: likes + 1 });

    const inputRef = useRef();

    const getCoordinates = () => {
        
        const obj = inputRef.current.getBoundingClientRect();

        const moved = () => noteRef.update({ xPos: obj.left, yPos: obj.top })
        console.log(inputRef.current);
        
        return moved();
    }
            
    return ( 
        <DraggableCore onStop={getCoordinates} >
            <NoteStyled ref={inputRef} >
            <NoteStyled >

                <p>{content}</p>
                <p>x: {xPos}</p>
                <p>y: {yPos}</p>
                <p>{likes === 0 ? null : likes}</p>
                <button className="like" onClick={like}>Like</button>
                <button className="delete" onClick={remove}>X</button>
        
            </NoteStyled>
        </DraggableCore >
     );
};

 
export default Note;
