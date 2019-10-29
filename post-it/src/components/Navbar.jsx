import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import NavbarSignIn from './NavbarSignIn';

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


const NavbarStyled = styled.nav`
    display: flex;
    width: 150px;
    height: 100vh;
    flex-direction: row;
    top: 0;
    left: 0;
    justify-content: flex-start;
    position: absolute;
`;

const MenuWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0; 
    z-index: 1;

    .toggler {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
        width: 50px;
        height: 50px;
        opacity: 0;
    }

    .hamburger {
        position: absolute;
        top: 0;
        left: 0;
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

    .menu > div {
        background-color: aqua;
        border-radius: 50%;
        width: 30vw;
        height: 30vw;
        display: flex;
        flex:none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
    }

    .menu > div > div {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        transition: opacity 0.4s ease;
    }

    .toggler:checked ~ .menu {
        visibility: visible;
    }

    .toggler:checked ~ .menu > div  {
        transform: scale(1);
        transition-duration: 0.4s ease;
    }s
`;



const Menu = styled.div`
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden; 
    display: flex;
    align-items: center;
    justify-content: center;


`;

const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    text-align: start;
    margin: 0;
    padding: 0;

    li {
        list-style-type: none;
        color: black;
        font-size: 1.5rem;
        padding: 1rem;
       
    }

    a {
        text-decoration: none;
        transition: color 0.4s ease;
    }
`;


function Navbar (props) {

    return(
        <>
            <MenuWrap className='menu-wrap'>
            {/* <NavbarStyled> */}
                <input type="checkbox" className='toggler'/>
                    <div className='hamburger'>
                        <div></div>
                
                    </div>
                {/* <ButtonStyled onClick={ props.onClose }>x</ButtonStyled> */}
                    <Menu className="menu">
                        <div>
                            <div>
                                <UlStyled>
                                    <Link to='/' ><li>Home</li></Link>
                                    <Link to='/' ><li>Create postit</li></Link>
                                    <Link to='/' ><li>Members</li></Link>
                                    <Link to='/' ><li>Log out</li></Link>
                                        {/* <NavbarSignIn /> */}
                                </UlStyled>
                             </div>
                        </div>
                    </Menu>
                </MenuWrap>

            {/* </NavbarStyled> */}
        </>

    )
}

export default Navbar;