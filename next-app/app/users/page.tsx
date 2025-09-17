import React from 'react'
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string
}

const UsersPage = async () => {
  return (
    <UserTable />
  )
}

export default UsersPage