import React, { ReactNode } from 'react';
import { AuthProvider } from './app-context';

export const AppProvider: React.FC<ReactNode> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
