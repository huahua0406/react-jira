import React from 'react';
import { User } from './SearchForm';
import { Table } from 'antd';
interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps {
    list: Project[];
    users: User[];
}

export const List = ({ list, users }: ListProps) => {
    const columns = [
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        },
        {
            title: '负责人',
            dataIndex: 'person',
            key: 'person',
            render: (text: any, record: Project) => {
                return <span>{users.find((user) => user.id === record.personId)?.name || '未知'}</span>;
            },
        },
    ];
    return <Table columns={columns} dataSource={list} pagination={false} />;
};
