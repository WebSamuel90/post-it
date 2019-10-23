import React, {useState} from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Postit from '../components/Postit';
import Lines from '../components/ConnectLines';

// const BoardWrapperStyled = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     width: 100%;
//     height: 500px;
//     overflow: hidden;
//     margin: 25px;
//     padding: 15px;
// `;

const PostitWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px;

    @media screen and (max-width: 992px) {
        width: 100%;
        display: flex; 
        flex-direction: row;
        justify-content: center;
    }
`;


const colors = {
    Green: '#39D1B4',
    Yellow:'#ffc',
    Pink: '#FFB6C1',
    Blue: '#ADD8E6'
}

const Host = (props) => {
    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)

    return (
            <>
            <h1>Host page</h1>
            
                    <Board id='board-1'></Board>

               
                <PostitWrapperStyled>
                    <Postit id='postit-1' draggable='true' style={{ backgroundColor: backgroundColor }}>
                    
                        <p>Card one</p>
                    </Postit>
                    <Postit id='postit-2' draggable='true' style={{ backgroundColor: backgroundColor }}>
                        <p>Card two</p>
                    </Postit>
                    <Postit id='postit-3' draggable='true' style={{ backgroundColor: backgroundColor }}>
                        <p>Card three</p>
                    </Postit>
                    <Postit id='postit-4' draggable='true' style={{ backgroundColor: backgroundColor }}>
                        <p>Card four</p>
                    </Postit>
                    <Postit id='postit-5' draggable='true' style={{ backgroundColor: backgroundColor }}>
                        <p>Card four</p>
                    </Postit>
                    <Postit id='postit-6' draggable='true' style={{ backgroundColor: backgroundColor }}>
                        <p>Card four</p>
                    </Postit>
     
                </PostitWrapperStyled>
            
            </>
        
        );
    }


export default Host;