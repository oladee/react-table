import React, { useEffect } from 'react'
import Table from './components/Table';
import { useState } from 'react';
import Search from './components/Search';

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
    const [loading, setloading] = useState(false)
    const [searchTerm, setSearchTerm] = useState(null)
  const getUsers = async () => {
    setloading(true)
    try {
      const response = await fetch(baseUrl+"users");
      const data = await response.json();
      setTable(data)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
  console.log(table)
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className='p-2 overflow-hidden'>
      <div>
        <Search/>
        <input
        onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}
        />
      </div>
      <Table users={table} loading={loading} term ={searchTerm}/>
    </div>
  )
}

export default App
