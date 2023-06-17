import React, { useEffect } from 'react'
import Table from './components/Table';
import { useState } from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/"
const App = () => {
  const [table, setTable] = useState([
    {
    id: null,
    name: null,
    username: null,
    email: null,
    address: {
    street: null,
    suite: null,
    city: null,
    zipcode: null,
    geo: {
    lat: null,
    lng: null
    },
    },
    phone: null,
    website: null,
    company: {
    name: null,
    catchPhrase: null,
    bs: null
    }
    }])
  const getUsers = async () => {
    try {
      const response = await fetch(baseUrl+"users");
      const data = await response.json();
      setTable(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(table)
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className='p-2 overflow-hidden'>
      <Table users={table}/>
    </div>
  )
}

export default App
