import React, { useState } from 'react';
import Button from './Button';
import AddNote from './AddNote';
import styled from 'styled-components';

const ModalStyled = styled.div`
    width: 500px;
    height: 500px;
    max-width: 100%;
    margin: 0 auto;
    position: fixed; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: #eee;
    padding: 10px 20px 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 0.4s ease;
`;

const ButtonStyled = styled.div`
    margin-bottom: 15px; 
    padding: 3px 8px; 
    cursor: pointer; 
    border-radius: 50%;
    background-color: #fff;
    border: none; 
    width: 30px; 
    height: 30px;
    font-weight: bold; 
    align-self: flex-end;
`;

const colors = {
    Green: '#39D1B4',
    Yellow:'#ffc',
    Pink: '#FFB6C1',
    Blue: '#ADD8E6'
}

function Modal (props) {
    const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)

        const dialog = (
            <ModalStyled>
                <ButtonStyled onClick={ props.onClose }>x</ButtonStyled>
                    <AddNote/>
                    {/* <Postit style={{ backgroundColor: backgroundColor }}>
                        <h1>{backgroundColor}</h1>
                    </Postit> */}
                    <div>
                        <Button name="green" onClick={() => setBackgroundColor(colors.Green)}></Button>
                        <Button name="pink" onClick={() => setBackgroundColor(colors.Pink)}></Button>
                        <Button name="blue" onClick={() => setBackgroundColor(colors.Blue)}></Button>
                        <Button name="yellow" onClick={() => setBackgroundColor(colors.Yellow)}></Button>
                    </div>
                { props.children }
             </ModalStyled>
        );

        return (
            <>
                {dialog}
            </>
          );
    };

export default Modal;