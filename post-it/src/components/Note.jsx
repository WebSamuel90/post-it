import React, {useState} from 'react';
import { firestore } from '../firebase';
import styled from 'styled-components';
import DraggableCore from 'react-draggable';

const NoteStyled = styled.div`
    padding: 15px 25px;
    box-shadow: 2px 4px 6px #444;
    width: 250px;
    height: 150px;
    margin: 10px;
    cursor: pointer;
`;

const Note = ({ id, content, likes, user}) => {

    const noteRef = firestore.doc(`notes/${id}`);
    const remove = () => noteRef.delete();
    const like = () => noteRef.update({ likes: likes + 1 });

     console.log(DraggableCore);
     
        
    return ( 
        <DraggableCore
            
            >
            <NoteStyled>

                <p>{content}</p>
                <p>{likes == 0 ? null : likes}</p>
                <button className="like" onClick={like}>Like</button>
                <button className="delete" onClick={remove}>X</button>
        
            </NoteStyled>
        
    
        </DraggableCore >

     );

};

 
export default Note;
