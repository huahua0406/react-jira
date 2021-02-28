import React from 'react';

export interface User {
    id: string;
    name: string;
    token: string;
}

interface SearchFormProps {
    users: User[];
    param: {
        name: string;
        personid: string;
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
                value={param.personid}
                onChange={(e) =>
                    setParam({
                        ...param,
                        personid: e.target.value,
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
