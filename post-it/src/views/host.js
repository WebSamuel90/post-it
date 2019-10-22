import React, { Component } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
// import Postit from '../components/Postit';

import { firestore } from '../firebase';
import Notes from "../components/Notes";
import { collectIdsAndDocs } from '../utilities';

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

class Host extends Component {

    state = { 
        notes: [],
      }
    
      unsubscribe = null;
    
      componentDidMount = async () => {
        this.unsubscribe = firestore.collection('notes').onSnapshot(snapshot => {
            const notes = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ notes });
        });
      };
    
      componentWillUnmount = () => {
          this.unsubscribe();
      };

    render() {
        const {notes} = this.state;
        

        return (
            <>
                <h1>Host page</h1>
                <BoardWrapperStyled>
                    <Board id='board-1'></Board>
                </BoardWrapperStyled>

                <PostitWrapperStyled>
                    <Notes notes={notes} />
                </PostitWrapperStyled>
            </>
            
        );

    }
}


export default Host;