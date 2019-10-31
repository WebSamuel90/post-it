import React, { createContext, useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const NotesContext = createContext();

const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore
            .collection('notes')
            .onSnapshot((snapshot) => {
                const newNotes = snapshot.docs.map(collectIdsAndDocs);

                setNotes(newNotes)
            })

        return () => unsubscribe();
    }, [])
    
    return (
        <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
    )
}

export default NotesProvider;