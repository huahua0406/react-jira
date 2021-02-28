import React from 'react';
import './App.css';
import { ProjectList } from '@/pages/project';
import { LoginPage } from '@/pages/login';
import { useAuth } from '@/context/app-context';
function App() {
    const { user } = useAuth();
    return <div className="App">{user ? <ProjectList /> : <LoginPage />}</div>;
}

export default App;
