import React, { useState } from 'react';
import Button from './Button';
import AddNote from './AddNote';
import styled from 'styled-components';

const ModalStyled = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.8);
    position: fixed; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    transition: all 0.4s ease;
    border: 1px solid black;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 30px;
    // background-color: #fff;
    width: 500px;
    height: 600px;


    @media screen and (max-width: 768px) {
        height: 600px;
        width: 100%;
    }
`;

const ButtonPosition = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 40vw;
`;

const ButtonStyled = styled.img`
    padding: 3px 8px; 
    cursor: pointer; 
    margin-top: 40px;
    border: none; 
    width: 30px; 
    height: 30px;
    font-weight: bold; 
    align-self: center;
    color: #fff;
`;

const colors = {
    Green: '#cdffcd',
    Yellow:'#ffc',
    Pink: '#FFB6C1',
    Purple: '#ccccff'
}

function Modal (props) {
    const [postitColor, setPostitColor] = useState(colors.Yellow)

        const dialog = (
            <ModalStyled>
                <ModalContent>
                    <AddNote width='15em' height='15em'></AddNote>
                        <ButtonStyled src="assets/imgs/close.svg" onClick={ props.onClose }></ButtonStyled>
                            {/* <ButtonPosition>
                                <Button backgroundColor={ colors.Green } name="green" onClick={() => setPostitColor(colors.Green)}></Button>
                                <Button backgroundColor={ colors.Pink } name="pink" onClick={() => setPostitColor(colors.Pink)}></Button>
                                <Button backgroundColor={ colors.Purple } name="purple" onClick={() => setPostitColor(colors.Purple)}></Button>
                                <Button backgroundColor={ colors.Yellow } name="yellow" onClick={() => setPostitColor(colors.Yellow)}></Button>
                            </ButtonPosition> */}
                    </ModalContent>
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