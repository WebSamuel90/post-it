import React, { Component } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Navbar from '../components/Navbar';
// import Postit from '../components/Postit';

import { firestore, auth, createUserProfileDocument } from '../firebase';
import Notes from "../components/Notes";
import { collectIdsAndDocs } from '../utilities';
import Authentication from '../components/Authentication';


const BoardWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // height: 100vh;
    overflow: hidden;
    margin: 25px;
    padding: 15px;
    // transform: scale(0.7); 
    
`;

const PostitWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;

`;

class Host extends Component {
//    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)
    state = { 
        user: null
    }
    
      unsubscribeFromAuth = null;
    
      componentDidMount = async () => {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const user = await createUserProfileDocument(userAuth);
            
            this.setState({ user });
        });
      };
    
      componentWillUnmount = () => {
          this.unsubscribeFromAuth();
      };


// const colors = {
  //  Green: '#39D1B4',
   // Yellow:'#ffc',
 //   Pink: '#FFB6C1',
  //  Blue: '#ADD8E6'
// }

    render() {
        const { user } = this.state;
        
        
        return (
            <>
                <Navbar />
                <h1>Host page</h1>
                <Authentication />

                <BoardWrapperStyled>
                
                </BoardWrapperStyled>
                <PostitWrapperStyled>

                    <Notes />
    
                </PostitWrapperStyled>
            
            </>
        );
    }
}


export default Host;
