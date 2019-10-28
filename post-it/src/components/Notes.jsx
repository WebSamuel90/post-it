import React, { useContext } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import { NotesContext } from '../providers/NotesProvider';

const Notes = () => {

    const notes = useContext(NotesContext);
    
    return ( 
        <>
            <AddNote />
            {notes.map(note => <Note {...note} key={note.id} />)}
        </>
    );
}
 
export default Notes;