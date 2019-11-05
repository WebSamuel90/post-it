import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import NavbarSignIn from './NavbarSignIn';
import AddNote from './AddNote';
import Authentication from './Authentication';


const MenuWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0; 
    z-index: 1;

    .toggler {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        width: 60px;
        height: 60px;
        opacity: 0;
    }

    .hamburger {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 50px;
        height: 50px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hamburger > div {
        position: relative;
        width: 80%;
        height: 2px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }

    .hamburger > div:before,
    .hamburger > div:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background-color: inherit;
    }

    .hamburger > div:after {
        top: 10px;
    }

    .toggler:checked + .hamburger > div {
        transform: rotate(135deg);
    }

    .toggler:checked + .hamburger > div:before,
    .toggler:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);
    }

    .toggler:checked:hover + .hamburger > div {
        transform: rotate(225deg);
    }


    .toggler:checked ~ .nav-sidebar {
        // visibility: visible;
        right: 0;
        transition: all 0.3s ease-in-out;
    }

`;

const Aside = styled.aside`
    position: fixed; 
    background-color: aqua;
    bottom: 0; 
    right: -300px; 
    width: 300px;
    height: 100%;
    overflow: hidden; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000px;
    transition: all 0.3s ease-in-out;
`;

const UlStyled = styled.ul`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    list-style-type: none;
    justify-content: space-around;
    text-align: start;
    overflow: hidden; 
    // visibility: hidden;
    margin: 0;
    padding-top: 15px;

    a {
        text-decoration: none;
        display: block;
        height: 60px;
        padding: 0 10px;
        font-size: 16px;
        text-transform: uppercase;
        white-space: nowrap;
    
    }

    .button:checked ~ ul {
        display: block;
        transition: all 0.3s ease-in-out;
    }
`;

const LiStyled = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-transform: uppercase;
    margin: 10px;
    color: black;
    // line-height: 60px;
    // padding: 1rem;

`;

const MembersUl = styled.ul`
    display: none;
    position: absolute;
    width: 30vw;
    height: 150px;
    margin-top: 25px;
    line-height: 40px;
    background-color: pink;

    li {
        margin: 0;
        padding: 0 1em;
        width: 30vw;
    }
`;

const InputStyled = styled.input`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    width: 150px;
    height: 20px;
    opacity: 0;
`;

const ImgStyled = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 10px;
`;

const colors = {
    Green: '#cdffcd',
    Yellow:'#ffc',
    Pink: '#FFB6C1',
    Purple: '#ccccff'
}

function Navbar (props) {
    const [postitColor, setPostitColor] = useState(colors.Yellow)

    return(
        <>
            <MenuWrap className='menu-wrap'>
            {/* <NavbarStyled> */}
                <input type="checkbox" className='toggler'/>
                    <div className='hamburger'>
                        <div></div>
                
                    </div>
                {/* <ButtonStyled onClick={ props.onClose }>x</ButtonStyled> */}

                <Aside className="nav-sidebar" id='sidebar'>
                    <UlStyled>
                        <LiStyled>Home</LiStyled>
                        <Authentication />
                        <LiStyled>Members
                            <InputStyled type='checkbox' className="button"></InputStyled>
                            <ImgStyled src='assets/imgs/arrow.svg'/>
                            <MembersUl>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </MembersUl>
                            </LiStyled>
                        <AddNote width='170px' backgroundColor= { postitColor } />
                    </UlStyled>        
                </Aside>
            </MenuWrap>
        </>

    )
}

export default Navbar;