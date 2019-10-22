import React, {useState, useEffect} from 'react';
import Postit from '../components/Postit';
import Button from '../components/Button';
import styled from 'styled-components';


const WrapperStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 992px) {
        width: 100%;
        height: 100vh;
        display: flex; 
        flex-direction: column;
        justify-content: center;
    }
`;

const colors = {
    Green: '#39D1B4',
    Yellow:'#FFD712',
    Pink: '#FFB6C1',
    Blue: '#ADD8E6'

}


const User = () => {
    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)
    
    console.log(backgroundColor);
    
    

//    const handleUpdate = (event) => {
//         setUpdate(event.target.value);
//     }

//     const updateColor = (event) => {
//         event.preventDefault();
//         setColor(update);
//         setUpdate([]);
//     }


    return (
            <>
                <h1>User page</h1>
                {console.log(backgroundColor)
                }

                <WrapperStyled>
                <Postit id="postit" style={{ backgroundColor: backgroundColor }}>

                    <h1>{backgroundColor}</h1>
                    
                </Postit>
                
                <Button name="green" onClick={() => setBackgroundColor(colors.Green)}>
                    
                    </Button>
                    <Button name="pink" onClick={() => setBackgroundColor(colors.Pink)}>
                    
                    </Button>
                    <Button name="blue" onClick={() => setBackgroundColor(colors.Blue)}>
                    
                    </Button>
                </WrapperStyled>
            </>
        
        );
    }


export default User;