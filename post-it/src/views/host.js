import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Postit from '../components/Postit';

const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 768px;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    padding: 15px;
`;

const PostitWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px;

`;



const Host = (props) => {
    return (
            <>
            <h1>Host page</h1>
                <BoardWrapperStyled>
            
                    <Board id='board-1'></Board>
            
                </BoardWrapperStyled>

                <PostitWrapperStyled>
                    <Postit id='postit-1' draggable='true'>
                        <p>Card one</p>
                    </Postit>
                </PostitWrapperStyled>
            </>
        
        );
    }


export default Host;