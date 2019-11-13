import React, { useState } from 'react';
import Modal from '../components/Modal';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';


const WrapperStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: pink;


    // @media screen and (max-width: 992px) {
    //     width: 100%;
    //     height: 100vh;
    //     display: flex; 
    //     flex-direction: column;
    //     justify-content: flex-end;
    // }
`;

const ModalButton = styled.img`
    height: 100px;
    width: 100px;
    cursor: pointer;
`;

const MemberAddNote = () => {
    const [openButton, setOpenButton] = useState(false)

        return (
            <>
                <Link to='/'><BackButton img="assets/imgs/left.png"/></Link>
                <WrapperStyled id="background">
                
                   {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)}>
                    
                    </Modal>}
                    
                    {/* <ModalButton onClick={() => setOpenButton(true)}></ModalButton>  */}
                    <ModalButton src={openButton === false ? "assets/imgs/plus.svg" : null} name="modal" onClick={() => setOpenButton(true)}  ></ModalButton>
                </WrapperStyled>
            
            </>
        
        );
    }

export default MemberAddNote;