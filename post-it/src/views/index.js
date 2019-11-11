import React from 'react';
import { Link } from 'react-router-dom'; 
import HomeButton from '../components/HomeButton';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #666666;

    a {
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
`;

const H1 = styled.h1`   
    color: #fff;
    text-transform: uppercase;
`;

const HostPlacement = styled.div`
    width: 205px;
    display: flex; 
    flex-direction: column;
    height: 50%;

    a {
        text-transform: uppercase;
        color: black;
        text-decoration: none;
    }
`;

const ImgPlacement = styled.div`
    width: 100%;
    position: absolute;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    top: 0;
`;

const ImgStyled= styled.img`
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    color: #fff;
`;


const Home = () => {
    return (
            <>
                <WrapperStyled>
                    <ImgPlacement>
                        <ImgStyled src="assets/imgs/information.svg"></ImgStyled>
                            <ImgStyled src="assets/imgs/user.svg"></ImgStyled>
                                </ImgPlacement>
                                    <H1>Stick.IT!</H1>
                                <HostPlacement>
                            <Link to="/Host"><HomeButton name="Host" color='#ffc'/></Link>
                        <Link to="/User"><HomeButton name="User" color='#cdffcd'/></Link>
                    </HostPlacement>
                <Link to="/User"><HomeButton name="Create Board" color='#ccccff' marginBottom="50px" /></Link>
            </WrapperStyled>
        </>
        
        );
    }

export default Home;