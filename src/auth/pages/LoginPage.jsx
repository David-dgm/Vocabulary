import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
	
	const {login} = useContext(AuthContext)
	
	const navigate = useNavigate();

	const onLogin = () => {

		const lastPath = localStorage.getItem('last-path') || '/';

		login('David Gomez');
		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<div>
			<h1>LoginPage</h1>
			<hr />
			<button className='btn btn-primary' onClick={onLogin}>
				Login
			</button>
		</div>
	);
};
