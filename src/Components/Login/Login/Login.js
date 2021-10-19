import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle}=useAuth();
    return (
        <div id="login">
            <h2>Plese Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;