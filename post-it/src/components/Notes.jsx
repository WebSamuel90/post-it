import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from '../providers/NotesProvider';

const Notes = (props) => {

    const notes = useContext(NotesContext);
    
    return ( 
        <>
            {notes.map(note => <Note {...note} key={note.id} {...props} />)}
        </>
    );
}
 
export default Notes;