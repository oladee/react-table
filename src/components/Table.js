import React from 'react'

const Table = ({users, loading}) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
              loading ? (
                <div>
                  <h1>Please Wait while we get the information</h1>
                </div>
              ) : (
                <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700"'>
              <td className='px-6 py-4'>{index+1}</td>
              <td className='text-sm md:text-xl px-6 py-4'>{user.name}</td>
              <td className='text-sm md:text-xl px-6 py-4'>{user.phone?.split(" ")[0].replaceAll(".", '-')}</td>
              <td className='text-sm md:text-xl px-6 py-4'>{user.email}</td>
              <td className='text-sm md:text-xl px-6 py-4'> {user.address.street}</td>
            </tr>
              )
            )
          })}
        </tbody>

    </table>
    </div>
  )
}

export default Table
