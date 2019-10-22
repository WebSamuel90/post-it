import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const Notes = ({ notes }) => {
    
    return ( 
        <>
            <AddNote />
            {notes.map(note => (
                <Note {...note} key={note.id} 
            />))}
        </>
    );
}
 
export default Notes;