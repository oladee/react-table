import React from 'react'

const Table = ({users}) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th scope="col" className='px-6 py-3'>S/N</th>
          <th scope="col" className='px-6 py-3'>Full Name</th>
          <th scope="col" className='px-6 py-3'>Phone Number</th>
          <th scope="col" className='px-6 py-3'>Email Address</th>
          <th scope="col" className='px-6 py-3'>Street</th>
        </tr>
        </thead>
        <tbody>
          {users.map((user,index) => {
            return(
              <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700"'>
              <td className='px-6 py-4'>{index+1}</td>
              <td className='text-sm md:text-xl '>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              
            </tr>
            )
          })}
        </tbody>

    </table>
    </div>
  )
}

export default Table
