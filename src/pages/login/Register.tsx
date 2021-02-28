import { useAuth } from '@/context/app-context';

export const RegisterForm = () => {
    const { register } = useAuth();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.currentTarget.elements[0] as HTMLFormElement).value;
        const password = (e.currentTarget.elements[1] as HTMLFormElement).value;
        register({ username, password });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
            <button type="submit">register</button>
        </form>
    );
};
