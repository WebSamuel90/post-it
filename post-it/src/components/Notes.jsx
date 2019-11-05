import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from '../providers/NotesProvider';
import styled from 'styled-components';

const NotesWrapper = styled.div`
    width: 100%; 
    // display: flex; 
    // flex-direction: row;
    // justify-content: flex-end;
    // postion: absolute;
    // top: 100px;
    // left: 100px;
`;

const Notes = (props) => {

    const notes = useContext(NotesContext);
    
    return ( 
        <>
            <NotesWrapper>
                {notes.map(note => <Note {...note} key={note.id} {...props} />)}
            </NotesWrapper>
        </>
    );
}
 
export default Notes;