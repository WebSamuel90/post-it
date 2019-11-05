import React, { useState } from 'react';
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

// const InputStyled = {
//     padding: '15px 25px',
//     boxShadow: '2px 4px 6px #444',
//     backgroundColor: '#ffc',
//     height: '150px',
//     margin: '10px',
//     cursor: 'pointer',
//     overflow: 'hidden',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     resize: 'none',
//     outline: 'none',
// }

const AddNote = (props) => {
    const InputStyled = {
        padding: '15px 25px',
        boxShadow: '2px 4px 6px #444',
        backgroundColor: props.backgroundColor,
        height: '150px',
        width: props.width,
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
    const [content, setContent] = useState('');

    const sanitize = () => {
        
        setContent(prevContent => { return sanitizeHtml(prevContent, {
            allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
            allowedAttributes: { a: ["href"] }
        }) });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { uid, displayName, email } = auth.currentUser || {};

        const note = {
            content,
            likes: 0,
            user: {
                uid,
                displayName,
                email,
            }
        };
        
        firestore.collection('notes').add(note)
        .then(() => {
            setContent('')
        });
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <ContentEditable
                    style={InputStyled}
                    disabled={false}
                    type="text"
                    onChange={e => setContent(e.target.value)}
                    html={content}
                    onBlur={sanitize}
                    {...props}
                    >
             
                    </ContentEditable>
                <input type="submit" value="Create Note" />
            </form>
        </>
    );
}

export default AddNote;