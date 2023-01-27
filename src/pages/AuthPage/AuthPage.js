import { useState } from 'react';
import './AuthPage.css';
import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="AuthPage">
            {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <div>
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
            </div>
        </div>
    );
}

