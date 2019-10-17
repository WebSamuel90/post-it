import React from 'react';
import styled from 'styled-components';

const BoardStyled = styled.div`
    dislay: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    background-color: pink;
    padding: 15px;
`;


function Board (props) {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <BoardStyled 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            { props.children } 

        </BoardStyled>
    )
}

export default Board
