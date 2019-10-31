import React, { useContext } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import { NotesContext } from '../providers/NotesProvider';
import styled from 'styled-components';

const NotesWrapper = styled.div`
    width: 100%; 
    display: flex; 
    flex-direction: row;
    justify-content: center;

`;

const Notes = () => {

    const notes = useContext(NotesContext);
    
    return ( 
        <>
            <AddNote />
            <NotesWrapper>
                {notes.map(note => <Note {...note} key={note.id} />)}
            </NotesWrapper>
        </>
    );
}
 
export default Notes;