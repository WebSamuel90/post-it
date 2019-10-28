import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const NotesContext = createContext();

class NotesProvider extends Component {
    state = { notes: [] };

    unsubscribeFromFirestore = null;

    componentDidMount = () => {
        this.unsubscribeFromFirestore = firestore.collection('notes').onSnapshot(snapshot => {
            const notes = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ notes });
        });
    }

    componentWillUnmount = () => {
        this.unsubscribeFromFirestore();
    }

    render() {
        const { notes } = this.state;
        const { children } = this.props;

        return (
            <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
        )
    }
}

export default NotesProvider;