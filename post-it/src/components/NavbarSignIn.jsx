import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;


const NavbarSignIn = () => {
    return (
        <UlStyled>
            <li><NavLink to='/'>New Postit</NavLink></li>
            <li><NavLink to='/'>Members</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>

        </UlStyled>
    )
}

export default NavbarSignIn;