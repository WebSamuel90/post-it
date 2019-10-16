import React from 'react';
import Note from './Note';
// import AddNote from './AddNote';

const Notes = ({ notes, onCreate, onRemove }) => {
    return ( 
        <>
            {/* <AddNote onCreate={onCreate} />
            {notes.map(note => <Note {...note} key={note.id} onRemove={onRemove} />)} */}
        </>
    );
}
 
export default Notes;