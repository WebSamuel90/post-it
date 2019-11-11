import React from 'react';
import { firestore } from '../firebase';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const NoteStyled = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 15px 25px;
    box-shadow: 2px 4px 6px #444;
    background-color: ${props => props.postitColor};
    height:10em;
    width:10em;
    padding:1em;
    margin: 10px;
    cursor: pointer;
    position: absolute;

    // @media screen and (max-width: 768px) {
    //     height: 50px;
    //     width: 50px;
    // }
`;

const ButtonPlacement = styled.div`
    width: 18px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
`;

const ButtonLike = styled.img`
    width: 20px;
    height: 20px;
`;

const ButtonDelete = styled.img`
    width: 20px;
    height: 20px;
`;

const ContentPlacement = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    margin-left: 20px;
    align-items: center;
    justify-content: center;

    p {
        color: #333;
    }
`;

const LikePlacement = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;

    p {
        color: #333;
    }
`;
 
const Note = ({id, content, likes, xPos, yPos, postitColor}) => {
    
    const noteRef = firestore.doc(`notes/${id}`);
    const remove = () => noteRef.delete();
    const like = () => noteRef.update({ likes: likes + 1 });
    
    const handleOnstop = (event, data) => {
        
        noteRef.update({ xPos: data.x, yPos: data.y });

    };

    return ( 
        <Draggable onStop={handleOnstop} position={{x: xPos, y: yPos}}>
            <NoteStyled {...{postitColor}}>
                <ButtonPlacement>
                    <LikePlacement>
                        <p>{likes === 0 ? null : likes}</p>
                        <ButtonLike src="assets/imgs/star.svg" className="like" onClick={like}></ButtonLike>
                    </LikePlacement>
                    <ButtonDelete src="assets/imgs/delete.svg"  className="delete" onClick={remove}></ButtonDelete>

                </ButtonPlacement>

                <ContentPlacement>
                    <p>{content}</p>
                </ContentPlacement>
               
            </NoteStyled>
        </Draggable>
     );
};
 
export default Note;
