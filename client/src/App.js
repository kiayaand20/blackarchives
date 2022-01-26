import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './services/users'
import Home from './screens/Home/Home'
import Directors from './screens/Directors/Directors'

  function App() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const fetchUser = async () => {
        const user = await verifyUser()
        user ? setUser(user) : setUser(null)
      }
      fetchUser()
    }, [])

  return (
    <div className="body">
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/directors' element={<Directors user={user}/>} />
      </Routes>
    </div>
  );
}

export default App
