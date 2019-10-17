import React, { Component } from 'react';
import { firestore } from '../firebase';
import Notes from "./Notes";
import collectIdsAndDocs from '../utilities';

class Application extends Component {
    state = {  }

    unsubscribe = null;

    componentDidMount = async () => {

        // snapshot.forEach(doc => {
        //     const id = doc.id;
        //     const data = doc.data();

        //     console.log({ id, data });
            
        // });

        this.unsubscribe = firestore.collection('notes').onSnapshot(snapshot => {
            const notes = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ notes });
        });

    };

    componentWillUnmount = () => {
        this.unsubscribe();
    };

    render() { 
        return ( 
            <>
                <Notes notes={this.notes}/>
            </> 
        );
    }
}
 
export default Application;
