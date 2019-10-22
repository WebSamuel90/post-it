import React, { Component } from 'react';
import { firestore } from '../firebase';
import Notes from "./Notes";
import collectIdsAndDocs from '../utilities';

class Application extends Component {
    state = { 
        notes: [],
     }

    unsubscribe = null;

    componentDidMount = async () => {
        const snapshot = await firestore.collection('notes').get();

        const notes = snapshot.docs.map(doc => {return { id: doc.id, ...doc.data() }; });

        this.setState({ notes });
        

        // this.unsubscribe = firestore.collection('notes').onSnapshot(snapshot => {
        //     const notes = snapshot.docs.map(collectIdsAndDocs);
        //     this.setState({ notes });
        // });
    };

    componentWillUnmount = () => {
        this.unsubscribe();
    };

    render() { 
        const { notes } = this.state;
        
        return ( 
            <>
                <Notes notes={this.notes}/>
            </> 
        );
    }
}
 
export default Application;
