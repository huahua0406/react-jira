import React from 'react';
import { User } from './SearchForm'

interface Project {
    id: string;
    name: string;
    personid: string;
}

interface ListProps {
    list: Project[],
    users: User[],
}

export const List = ({list, users}: ListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>项目名称</td>
                    <td>负责人</td>
                </tr>
            </thead>
            <tbody>
            {
                list.map((item => 
                   (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{users.find(user => user.id === item.personid)?.name||'未知'}</td>
                    </tr>
                   )
                ))
            }
            </tbody>
        </table>
    )
}