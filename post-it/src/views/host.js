import Lines from '../components/ConnectLines';

import React, { Component } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';

import { firestore } from '../firebase';
import Notes from "../components/Notes";
import { collectIdsAndDocs } from '../utilities';


const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 25px;
    padding: 15px;
    transform: scale(0.5);
`;

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

class Host extends Component {
  //  const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)
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


// const colors = {
  //  Green: '#39D1B4',
   // Yellow:'#ffc',
 //   Pink: '#FFB6C1',
  //  Blue: '#ADD8E6'
// }

    render() {
        const {notes} = this.state;
        
        return (
            <>
                <h1>Host page</h1>
                <BoardWrapperStyled>

                    <Board id='board-1' />

          
                <PostitWrapperStyled>
                  
                    <Notes notes={notes} />

                    {/* <Postit id='postit-1' draggable='true'>

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
     

                    </Postit> */}
           
                </PostitWrapperStyled>

                </BoardWrapperStyled>
            </>
            
        );

    }
}


export default Host;