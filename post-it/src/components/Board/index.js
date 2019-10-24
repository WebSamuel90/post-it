import React from 'react';
import styled from 'styled-components';


const BoardStyled = styled.div`
    display: grid;
    // grid-template-columns: auto auto auto;
    width: 100%;
    height: 400px;
    background-color: #2196F3;
    padding: 15px;

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
    }
`;

// class Board extends Component {
    
//     drop = (e) => {
//         e.preventDefault();
//         const data = e.dataTransfer.getData('transfer');
//         e.target.appendChild(document.getElementById(data));

//         const card = document.getElementById(data);
//         card.style.display = 'inline-block';
//     }


//     allowDrop = (e) => {
//         e.preventDefault();
//     }

//     render() { 
//         return ( 
//             <BoardStyled id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}
            
//         >   {this.props.children}
    

//             </BoardStyled>

//          );
//     }
// }
// Board.propTypes = {
//     id: propTypes.string,
//     children: propTypes.node,
// }

// export default Board;



function Board (props) {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'inline-block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <BoardStyled
            id={props.id}
            // className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
         >

            { props.children } 

        </BoardStyled>
    )
}

export default Board
