import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import NavbarSignIn from './NavbarSignIn';
import AddNote from './AddNote';
import Authentication from './Authentication';


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
        width: 60px;
        height: 60px;
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


    .toggler:checked ~ .nav-sidebar {
        // visibility: visible;
        left: 0;
        transition: all 0.3s ease-in-out;
    }

`;

const Aside = styled.aside`
    position: fixed; 
    background-color: aqua;
    bottom: 0; 
    left: -200px; 
    width: 200px;
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
    flex-direction: column;
    list-style-type: none;
    text-align: start;
    overflow: hidden; 
    // visibility: hidden;
    margin: 0;
    padding-top: 15px;

    li {
        list-style-type: none;
        color: black;
        line-height: 60px;
        // padding: 1rem;
    }

    a {
        text-decoration: none;
        display: block;
        height: 60px;
        padding: 0 10px;
        font-size: 16px;
        text-transform: uppercase;
        white-space: nowrap;
    
    }

    a:hover {
        background-color: #fff;
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

                    <Aside className="nav-sidebar" id='sidebar'>
                       
                                <UlStyled>
                                    <Link to='/' ><li>Home</li></Link>
                                    <Link to='/' ><li>Create Postit</li></Link>
                                    <Link to='/' ><li>Members</li></Link>
                                        <AddNote width="100px"/>
                                        {/* <NavbarSignIn /> */}
                                        <Authentication />
                                </UlStyled>        
                    </Aside>
                </MenuWrap>

            {/* </NavbarStyled> */}
        </>

    )
}

export default Navbar;