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
            <LiStyled>Color Mode
                <ToggleButton />
            </LiStyled>
            <Line />
            <Link to='/'><LiStyled>Help</LiStyled></Link>
            <Line />

            <LiStyled>Members
                <InputStyled type='checkbox' className="button"></InputStyled>
                <ArrowDown />

                {/* <MembersUl>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </MembersUl> */}
            </LiStyled>
            <Line />
        </>
    )
}

export default NavbarLink;