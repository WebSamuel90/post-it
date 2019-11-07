import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div `
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 2px 4px 6px #444;
    outline: none;
    background-color: ${props => props.backgroundColor};

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 50px;
        margin-bottom: 20px;
        cursor: pointer;
        border-radius: 50%;
        outline: none;
    }
`;

const Button = (props) => {

        return ( 
                <ButtonStyled {...props}>
                    {props.name}
                </ButtonStyled>
         );
    }

export default Button;