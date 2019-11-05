import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button `
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 50%;
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

function Button (props) {

        return ( 
           
                <ButtonStyled 
                    {...props}
                >
                
                {props.name}
                </ButtonStyled>
            
         

         );
    }

 
export default Button;