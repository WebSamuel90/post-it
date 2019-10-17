import React from 'react';
import { firestore } from 'firebase';

class AddNote extends Component {
    state = {  }

    handleSubmit = event => {
        event.preventDefault();

        // firestore.collection('notes').add(note);
        firestore.collection('notes').doc(note.id).set(note);
    }

    render() { 
        return ( 
            <>

            </>
         );
    }
}
 
export default AddNote;
