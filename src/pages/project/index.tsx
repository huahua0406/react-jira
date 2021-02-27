import React, { useState, useEffect} from 'react';
import * as qs from 'qs';
import { SearchForm } from './SearchForm';
import { List } from './List';
import { useMount, useDebounceValue } from '../../utils/customHook'
import { clearObject } from '../../utils'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const ProjectList = () => {
    const [param, setParam] = useState({
        name:'',
        personid: ''
    })
    const [users, setUsers]  = useState([])
    const [list, setList] = useState([])

    const debounceParam = useDebounceValue(param)

    useEffect(() => {
        fetch(`${BASE_URL}/projects?${qs.stringify(clearObject(debounceParam))}`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${BASE_URL}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })

    return (
        <>
            <SearchForm users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </>
    )
}