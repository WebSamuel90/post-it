import React, { useState } from 'react';
import Modal from '../components/Modal';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom'; 
// import ModalButton from '../components/ModalButton';
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

const H1 = styled.h1`
    position: absolute; 
    top: 0; 
`; 

const ModalButton = styled.img`
    height: 100px;
    width: 100px;
    cursor: pointer;
`;

// const NavbarButton = styled.button`
//     height: 200px;
//     width: 100px;
//     cursor: pointer;
//     color: pink;
// `;

// const NavbarButtonPlacement = styled.div`
//     width: 100vw;
//     height: 50px;
//     top: 0;
//     left: 0;
//     display: flex;
//     flex-direction: row; 
//     justify-content: flex-start;

// `;

const User = () => {
    const [openButton, setOpenButton] = useState(false)

    function blurBackground() {
        document.getElementById('background').className = "blur";

    }

        return (
            <>
            <Link to='/'><BackButton img="assets/imgs/left.png"/></Link>
                <WrapperStyled id="background">
                    
            
                    <H1>User page</H1>
                
                   {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)}>
                    
                    </Modal>}
                    
                    {/* <ModalButton onClick={() => setOpenButton(true)}></ModalButton>  */}
                    <ModalButton src={openButton === false ? "assets/imgs/plus.svg" : null} name="modal" onClick={() => setOpenButton(true)}  ></ModalButton>
                </WrapperStyled>
            
            </>
        
        );
    }

export default User;