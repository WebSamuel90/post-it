import React, { Component } from 'react';
import { firestore } from '../firebase';
import Notes from "./Notes";
import collectIdsAndDocs from '../utilities';

class Application extends Component {
    state = {  }

    componentDidMount = async () => {
        const snapshot = await firestore.collection('notes').get();

        snapshot.forEach(doc => {
            const id = doc.id;
            const data = doc.data();

            console.log({ id, data });
            
        });

        const notes = snapshot.docs.map(collectIdsAndDocs);

        this.setState({ notes });
        
    }

    handleCreate = async note => {
        const { notes } = this.state;

        const docRef = await firestore.collection('notes').add(note);
        const doc = await docRef.get();

        const newNote = collectIdsAndDocs(doc);

        this.setState({ notes: [newNote, ...notes] });
    };

    handleRemove = async id => {
        const allNotes = this.state.notes;

        await firestore.doc(`notes/${id}`).delete();

        const notes = allNotes.filter(note => note.id !== id);

        this.setState({ notes });
    };

    render() { 
        return ( 
            <>
                <Notes 
                    notes={this.notes}
                    onCreate={this.handleCreate} 
                    onRemove={this.handleRemove}
                />
            </> 
        );
    }
}
 
export default Application;
