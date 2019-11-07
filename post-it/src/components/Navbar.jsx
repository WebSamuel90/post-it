import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
// import ToggleButton from './ToggleButton';
import AddNote from './AddNote';
import NavbarLink from './NavbarLink';
import Line from './Line';
import '../DarkMode.css'
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
        background-color: var(--main-div-color);
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
        background-color: var(--main-li-color);
    }

    .toggler:checked + .hamburger > div:before,
    .toggler:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);
    }

    // .toggler:checked:hover + .hamburger > div {
    //     transform: rotate(225deg);
    // }


    .toggler:checked ~ .sidebar {
        right: 0;
        transition: all 0.3s ease-in-out;
    }
`;

const Aside = styled.aside`
    position: fixed; 
    background-color: var(--main-nav-color);
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
    height: 85vh;
    width: 100%;
    flex-direction: column;
    list-style-type: none;
    justify-content: space-around;
    overflow: hidden; 
    // visibility: hidden;
    color: var(--main-li-color);
    margin: 0;
    padding-top: 15px;

    a {
        text-decoration: none;
    }

    .button:checked ~ ul {
        display: block;
        transition: all 0.3s ease-in-out;
        animation: load 0.3s forwards;

        @keyframes load {
            100% {
                opacity: 1;
            }
        }
    }
`;

const NotePosition = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;

function Navbar (props) {

    return(
            <MenuWrap>
                <input type="checkbox" className='toggler'/>
                    <div className='hamburger'>
                        <div></div>
                            </div>
                    
                    <Aside className="sidebar" id='sidebar'>
                        <UlStyled className="ul">
                            <NavbarLink />
                            
                                    <NotePosition>
                                <AddNote width='130px' />
                            </NotePosition> 
                        </UlStyled>        
                    </Aside>
            </MenuWrap>



    )
}

export default Navbar;