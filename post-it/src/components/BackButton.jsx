import React from 'react'; 
import styled from 'styled-components';
import UserToggleButton from './UserToggleButton';
import ArrowLeft from './ArrowLeft';
import { Link } from 'react-router-dom'; 

// const DivStyled = styled.div`
//     height: 51px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     // position: relative;
//     position: fixed;
//     z-index: 5;
// `;

const UlStyled = styled.ul`
    width: ${ props => props.width || '100vw' };
    height: 51px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
    margin-left: 10px;
    position: fixed;
    padding: 0;
`;

const LiStyled = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const ImgStyled = styled.img `
    height: 29px;
`;


const BackButton = (props) => {
    return(
        <>
            <UlStyled { ...props }>
            <Link to='/'><LiStyled> <ArrowLeft /></LiStyled></Link>
                {/* <Link to='/'><LiStyled>{props.goTo}<ImgStyled src={props.img} alt=''></ImgStyled></LiStyled></Link> */}
                <UserToggleButton show="block" hide="none"/>
            </UlStyled>
        </>

    )
}

export default BackButton;