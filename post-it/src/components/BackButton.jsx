import React from 'react'; 
import styled from 'styled-components';

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
    margin: 0;
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
                <LiStyled>{props.goTo}<ImgStyled src={props.img} alt=''></ImgStyled></LiStyled>
            </UlStyled>
        </DivStyled>

    )
}

export default BackButton;