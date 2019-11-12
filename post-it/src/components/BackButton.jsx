import React from 'react'; 
import styled from 'styled-components';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router-dom'; 

const DivStyled = styled.div`
    height: 51px;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
`;

const UlStyled = styled.ul`
    width: ${ props => props.width || '86vw' };
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    text-decoration: none;
    margin-top: 20px;
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
        <DivStyled>
            <UlStyled { ...props }>
                <Link to='/'><LiStyled>{props.goTo}<ImgStyled src={props.img} alt=''></ImgStyled></LiStyled></Link>
                <ToggleButton show="block" hide="none"/>
            </UlStyled>
        </DivStyled>

    )
}

export default BackButton;