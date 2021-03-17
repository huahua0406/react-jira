import React, { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm';
import { List } from './List';
import { useMount, useDebounceValue } from '../../utils/customHook';
import { clearObject } from '../../utils';
import { useAuth } from '@/context/app-context';
import { useHttp } from '@/utils/http';

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const debounceParam = useDebounceValue(param);

    const { logout } = useAuth();
    const request = useHttp();

    useEffect(() => {
        request('/projects', {
            data: clearObject(debounceParam),
        }).then(setList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceParam]);

    useMount(() => {
        request('/users').then(setUsers);
    });

    return (
        <>
            <button onClick={logout}>logout</button>
            <SearchForm users={users} param={param} setParam={setParam} />
            <List list={list} users={users} />
        </>
    );
};
