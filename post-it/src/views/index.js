import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '../components/Button';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Home = () => {
    return (
            <>
                <h1>Home page</h1>
                <WrapperStyled>
                    <Link to="/Host"><Button name="Host" /></Link>
                    <Link to="/User"><Button name="User" /></Link>
                </WrapperStyled>
            </>
        
        );
    }

export default Home;