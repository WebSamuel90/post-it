import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


const NavbarStyled = styled.nav`
    display: flex;
    width: 200px;
    flex-direction: row;
    top: 0;
    left: 0;
    justify-content: flex-start;
    background-color: pink;
`;

const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

function Navbar (props) {

    return(
        <>
            <NavbarStyled>
                <UlStyled>
                   <Link to='/User' ><li>Members</li></Link>
                    <li>Members</li>
                    <li>Members</li>
                    <li>Members</li>
                </UlStyled>
            </NavbarStyled>
        </>

    )
}

export default Navbar;