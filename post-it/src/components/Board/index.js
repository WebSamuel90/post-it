import React from 'react';
import styled from 'styled-components';


const BoardStyled = styled.div`
    dislay: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    background-color: grey;
    padding: 15px;
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
