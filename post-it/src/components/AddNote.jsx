import React, { Component } from 'react';
import { firestore } from '../firebase';

class AddNote extends Component {
    state = { content: '' }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { content } = this.state;
        
        const note = { content }
        
        firestore.collection('notes').add(note);
        // firestore.collection('notes').doc(note.id).set(note);

        this.setState({ content: '' });
    }

    render() { 
        const { content } = this.state;

        return ( 
            <>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type="text"
                        name="content"
                        value={content}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create Note" />
                </form>
            </>
         );
    }
}
 
export default AddNote;
