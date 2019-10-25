import React, { Component } from 'react';
import { firestore, auth } from '../firebase';


class AddNote extends Component {
    state = { content: '' }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { content } = this.state;
        // const { uid, displayName, email } = auth.currentUser || {};
        
        const note = {
            content,
            likes: 0,
            // user: {
            //     uid,
            //     displayName,
            //     email,
            // }
        };
        
        try {
            firestore.collection('notes').add(note);
            // firestore.collection('notes').doc(note.id).set(note);
        } catch (error) {
            console.error(error);
        };

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
