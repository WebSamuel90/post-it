import React from 'react';
import styled from 'styled-components';


const PostitStyled = styled.div`
    padding: 15px 25px;
    width: 250px;
    height: 150px;
    border: 1px solid black;
    background-color: yellow;
    margin-top: 15px;
    cursor: pointer;
    margin-bottom: 15px;
`;

function Postit (props) {

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <PostitStyled
            id={props.id}
            className={props.className}
            draggable= {props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
        </PostitStyled>
    )
}

export default Postit
