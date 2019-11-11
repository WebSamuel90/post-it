import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div `
    height: 45px;
    width: 200px;
    margin-bottom: 20px;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 5px;
    cursor: pointer;
    // border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 4px 6px #444;
    outline: none;
    background-color: ${props => props.color};
    margin-bottom: ${props => props.marginBottom};

    @media screen and (max-width: 768px) {
 
    }
`;

const HomeButton = (props) => {

        return ( 
                <ButtonStyled {...props}>
                    {props.name}
                </ButtonStyled>
         );
    }

export default HomeButton;