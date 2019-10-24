import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button `
    height: 40px;
    width: 150px;
    margin-bottom: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
    height: 40px;
    width: 150px;
    border: 1px solid black;
    }
`;


const ButtonStyled = styled.button `
    height: 40px;
    width: 150px;
    margin-bottom: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
    height: 40px;
    width: 150px;
    border: 1px solid black;
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