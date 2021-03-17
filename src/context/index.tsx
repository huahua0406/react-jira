import React, { ReactNode } from 'react';
import { AuthProvider } from './app-context';
import { QueryClientProvider, QueryClient } from 'react-query';

export const AppProvider: React.FC<ReactNode> = ({ children }) => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <AuthProvider>{children}</AuthProvider>;
        </QueryClientProvider>
    );
};
