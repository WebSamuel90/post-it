import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button `
    height: 40px;
    width: 150px;
    margin-bottom: 20px;
`;



function Button (props) {

        return ( 
            <>
                <ButtonStyled>{props.page}</ButtonStyled>
            
            </>

         );
    }

 
export default Button;