import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '../components/Button';


const Home = (props) => {
    return (
            <>
                <h1>Home page</h1>
                <Link to="/Host"><Button page="Host" /></Link>
                <Link to="/User"><Button page="User" /></Link>
            </>
        
        );
    }

export default Home;