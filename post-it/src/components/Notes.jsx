import React from 'react';
import Note from './Note';
import { firestore } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const Notes = (props) => {
    const [value] = useCollection(
        firestore.collection('boards').doc(`${props.boardId}`).collection('notes')
    );
    
    return ( 
        <>
            {value && (value.docs.map(note => <Note key={note.id} id={note.id} {...note.data()} boardId={props.boardId} />))}
        </>
    );
}
 
export default Notes;