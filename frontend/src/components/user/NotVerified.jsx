import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Container from '../Container';


export default function NotVerified() {
    const {authInfo} = useAuth()
    const {isLoggedIn} = authInfo;
    const isVerified = authInfo.profile?.isVerified; 

    const navigate = useNavigate();
    
    const navigateToverification = () => {
        navigate('/auth/verification', {state: {user: authInfo.profile }})
    };

    return (
        <Container className={null}>
            {isLoggedIn && !isVerified ? (<p className='text-lg text-center bg-blue-50 p-2'>It looks like you haven't verified your account,
            <button onClick={navigateToverification} className='text-blue-500 font-semibold hover:underline'>Click here to verify your account.</button>
            </p> ) : null}
        </Container>
    );
}