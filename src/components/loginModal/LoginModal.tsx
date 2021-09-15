import React from 'react';
import Login from '../login/Login';
import ModalWrapper from '../modal-wrapper';


const LoginModal:React.FC = () => {
    
    return (
        <ModalWrapper title='login'>
            <Login />
        </ModalWrapper>
    )
}

export default LoginModal
