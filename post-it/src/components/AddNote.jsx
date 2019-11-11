import React, { useState } from 'react';
import { firestore, auth } from '../firebase';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from "sanitize-html";
import Button from './Button';

const ButtonPosition = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // width: 40vw;
    border: red solid 2px;
`;

const FormStyled = styled.form`
    border: red solid 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DivStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ButtonStyled = styled.input`
    box-shadow: 2px 4px 6px #444;
    margin-top: 20px;
    border-radius: 20px;
    width: 220px;
    height: 50px;
    background-color: #fff;
    cursor: pointer;

`;

const AddNote = (props) => {
    const [content, setContent] = useState('');
    
    const colors = {
        Green: '#cdffcd',
        Yellow:'#ffc',
        Pink: '#FFB6C1',
        Purple: '#ccccff'
    }

    const [postitColor, setPostitColor] = useState(colors.Yellow)

    const InputStyled = {
        padding: '15px 25px',
        boxShadow: '2px 4px 6px #444',
        backgroundColor: postitColor,
        height: props.height,
        width: props.width,
        color: '#333',
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



    const sanitize = () => {
        
        setContent(prevContent => { return sanitizeHtml(prevContent, {
            allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
            allowedAttributes: { a: ["href"] }
        }) });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const { uid, displayName, email } = auth.currentUser || {};

        const xPos = 0;
        const yPos = 0;

        const note = {
            content,
            xPos,
            yPos,
            postitColor,
            likes: 0,
            user: {
                uid: null,
                displayName: null,
                email: null,
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
                <DivStyled>
                    <Button backgroundColor={ colors.Green } onClick={() => setPostitColor(colors.Green)} >Green</Button>
                    <Button backgroundColor={ colors.Pink } onClick={() => setPostitColor(colors.Pink)} >Pink</Button>
                    <Button backgroundColor={ colors.Purple } onClick={() => setPostitColor(colors.Purple)} >Purple</Button>
                    <Button backgroundColor={ colors.Yellow } onClick={() => setPostitColor(colors.Yellow)} >Yellow</Button>
                </DivStyled>

                <ButtonStyled type="submit" value="Create Note"></ButtonStyled>
            </form>
        </>
    );
}

export default AddNote;