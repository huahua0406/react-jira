import { useState } from 'react';
import { LoginForm } from './Login';
import { RegisterForm } from './Register';

export function LoginPage() {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div>
            {isRegister ? <RegisterForm /> : <LoginForm />}
            <button onClick={() => setIsRegister(!isRegister)}>switch to {isRegister ? '登录' : '注册'}</button>
        </div>
    );
}
