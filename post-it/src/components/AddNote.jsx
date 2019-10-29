import React, { Component } from 'react';
import { firestore, auth } from '../firebase';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from "sanitize-html";

// const InputStyled = styled.div`
//     padding: 15px 25px;
//     box-shadow: 2px 4px 6px #444;
//     width: 250px;
//     height: 150px;
//     margin: 10px;
//     cursor: pointer;
//     text-align:center;

//     @media screen and (max-width: 768px) {
//         width: 250px;
//         height: 250px;
//     }
// `;

const InputStyled = {
    padding: '15px 25px',
    boxShadow: '2px 4px 6px #444',
    backgroundColor: '#ffc',
    width: '250px',
    height: '150px',
    margin: '10px',
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    resize: 'none',
    outline: 'none',
}


class AddNote extends Component {
    state = { content: '' }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ content: event.target.value });
    };

    sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
        allowedAttributes: { a: ["href"] }
    };

    sanitize = () => {
        this.setState({ content: sanitizeHtml(this.state.content, this.sanitizeConf) });
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

        } catch (error) {
            console.error(error);
        };

        this.setState({ content: '' });
    }

    render() { 
        const { content } = this.state;

        return ( 
            <>
                <form onSubmit={this.handleSubmit}>
                    <ContentEditable
                        style={InputStyled}
                        disabled={false}
                        type="text"
                        name="content"
                        onChange={this.handleChange}
                        html={this.state.content}
                        onBlur={this.sanitize}
                        
                    />
                
                    <input type="submit" value="Create Note" />
                </form>
            </>
         );
    }
}
 
export default AddNote;
