import React, { useContext, useState } from 'react';
import { UserContext } from '../providers/UserProvider';
import firebase from '../firebase';

const SignIn = () => {

	const user = useContext(UserContext)
	console.log(user);
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			
		} catch(error) {
			console.error(error);
		};
	};

  	return (
		<>
			<h2>Sign In</h2>
			<input
				type="email"
				name="email"
				placeholder="Email"
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				onChange={e => setPassword(e.target.value)}
			/>
			<input type="submit" onClick={handleSubmit} value="Sign In" />

		</>
  );
};

export default SignIn;