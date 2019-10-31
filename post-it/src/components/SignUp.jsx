import React, { Component, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const user = {
            displayName,
            email,
            password
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, { displayName })
    
        } catch (error) {
            console.error(error);  
        };
    }

    return (
        <form className="SignUp" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                type="text"
                name="displayName"
                placeholder="Display Name"
                onChange={e => setDisplayName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                // value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign Up" />
        </form>
    )
};

export default SignUp;