import React from 'react'
import UserList from "./components/UserList";
import users from './assets/data.json'
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  )
}

export default App