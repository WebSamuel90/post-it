import React, { useState, useContext } from 'react';
import { firestore, auth } from '../firebase';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from "sanitize-html";
import Button from './Button';
import { withRouter } from 'react-router-dom';


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

const ButtonPlacement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ButtonStyled = styled.input`
    height: 45px;
    width: 200px;
    margin-bottom: 20px;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 5px;
    cursor: pointer;
    cursor: pointer;
    box-shadow: 2px 4px 6px #444;
    font-family: 'Happy Monkey', sans-serif;
    font-size: 18px;
    outline: none;
    background-color: ${props => props.color};

    @media screen and (max-width: 768px) {
        height: 45px;
        width: 200px;
        margin-bottom: 20px;
        display: flex; 
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 5px;
        cursor: pointer;
        cursor: pointer;
        box-shadow: 2px 4px 6px #444;
        font-family: 'Happy Monkey', sans-serif;
        font-size: 18px;
        outline: none;
        background-color: ${props => props.color};
    }
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
        const getBoardId = props.match.params.id;
        
        firestore.collection('boards').doc(getBoardId).collection('/notes').add(note)
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
                <ButtonPlacement>
                    <ButtonStyled type="submit" value="Create Note" color='#fff'></ButtonStyled>
                </ButtonPlacement>
            </form>
        </>
    );
}

export default withRouter(AddNote);