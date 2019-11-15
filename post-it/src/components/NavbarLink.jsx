import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import ArrowDown from './ArrowDown';
import Line from './Line';

const LiStyled = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-transform: uppercase;
    text-decoration: none;
    width: 210px;
    // border-bottom: 1px solid #fff;
    font-size: 20px;
    margin-left: 45px;
    color: var(--main-li-color);
    // line-height: 60px;
    // padding: 1rem;
`;

const MembersUl = styled.ul`
    display: none;
    opacity: 0;
    position: absolute;
    border: 1px solid black;
    width: 140px;
    height: 130px;
    margin-top: 25px;
    line-height: 40px;
    background-color: #fff;
    text-decoration: none;
    
    li {
        margin: 0;
        padding: 0 1em;
        width: 30vw;
        text-align: start;
        list-style: none;
        color: #333;
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


const NavbarLink = (props) => {
    return (
        <>
            <Link to='/'>
                <LiStyled>Home</LiStyled>
            </Link>
            <Line />
            <LiStyled>Dark Mode
                <ToggleButton />
            </LiStyled>
            <Line />
            <Link to='/'><LiStyled>Help</LiStyled></Link>
            <Line />

            <LiStyled>Members
                <InputStyled type='checkbox' className="button"></InputStyled>
                <ArrowDown color="var(--main-font-color" height="20" width="20"/>
                
                <MembersUl>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </MembersUl>
            </LiStyled>
            <Line />
        </>
    )
}

export default NavbarLink;