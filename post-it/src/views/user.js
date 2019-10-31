import React, { useState } from 'react';
import Modal from '../components/Modal';
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

const colors = {
    Green: '#39D1B4',
    Yellow:'#ffc',
    Pink: '#FFB6C1',
    Blue: '#ADD8E6'
}

const User = () => {
    // const [backgroundColor, setBackgroundColor] = useState(colors.Yellow)
    const [openButton, setOpenButton] = useState(false)
    const [openNavbar, setOpenNavbar] = useState(true)


    
        return (
            <>
            {/*         
                {openNavbar && <Navbar openNavbar='false' onClose={() => setOpenNavbar(false)}>
                    </Navbar>} */}
                    
                {/* <NavbarButtonPlacement>
                    <NavbarButton name="navbar" onClick={() => setOpenNavbar(true)}></NavbarButton>
                </NavbarButtonPlacement> */}

                <WrapperStyled>

                <H1>User page</H1>
                {/* <Postit id="postit" style={{ backgroundColor: backgroundColor }}>
                    <h1>{backgroundColor}</h1>
                    
                </Postit>

                <Navbar />
                {/* 

                    <div>
                    <Button name="green" onClick={() => setBackgroundColor(colors.Green)}></Button>
                    <Button name="pink" onClick={() => setBackgroundColor(colors.Pink)}></Button>
                    <Button name="blue" onClick={() => setBackgroundColor(colors.Blue)}></Button>
                    <Button name="yellow" onClick={() => setBackgroundColor(colors.Yellow)}></Button>
                    </div> */}

                  
                   {openButton && <Modal openButton='false' onClose={() => setOpenButton(false)}>
                    
                    </Modal>}
                    
                    {/* <ModalButton onClick={() => setOpenButton(true)}></ModalButton>  */}
                    <ModalButton src={openButton === false ? "assets/imgs/plus.svg" : null} name="modal" onClick={() => setOpenButton(true)}></ModalButton>
                </WrapperStyled>
            
            </>
        
        );
    }

export default User;