import React from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}

interface SearchFormProps {
    users: User[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (params: SearchFormProps['param']) => void;
}

export const SearchForm = ({ users, param, setParam }: SearchFormProps) => {
    return (
        <div>
            <input
                type="text"
                onChange={(e) =>
                    setParam({
                        ...param,
                        name: e.target.value,
                    })
                }
            />
            <select
                value={param.personId}
                onChange={(e) =>
                    setParam({
                        ...param,
                        personId: e.target.value,
                    })
                }
            >
                <option value="">全部</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
