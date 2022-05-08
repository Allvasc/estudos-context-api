import React from 'react'
import { AuthContext } from './provider/auth'
import Profile from  './components/Profile'

const App = () => {

  const { user, setUser } = React.useContext(AuthContext)
  console.log(user)

  return (
    <div>
      <p style={{ color: user.color }}>{user.name}</p>
      <input type="text" onChange={(e) => setUser({name: e.target.value})} />

      <Profile />
    </div>

  )
}

export default App