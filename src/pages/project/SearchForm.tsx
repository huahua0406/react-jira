import React from 'react';
import { Input, Select } from 'antd';
const { Option } = Select;
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
            <Input
                placeholder="项目名称"
                onChange={(e) =>
                    setParam({
                        ...param,
                        name: e.target.value,
                    })
                }
            />
            <Select
                placeholder="负责人"
                value={param.personId}
                onChange={(value) =>
                    setParam({
                        ...param,
                        personId: value,
                    })
                }
            >
                <Option value={''}>全部</Option>
                {users.map((user) => (
                    <Option key={user.id} value={user.id}>
                        {user.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};
