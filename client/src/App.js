import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './services/users'
import Home from './screens/Home/Home'
import Directors from './screens/Directors/Directors'
import SignIn from './screens/SignIn/SignIn'
import DirectorDetail from './screens/DirectorDetail/DirectorDetail'
import DirectorEdit from './screens/DirectorEdit/DirectorEdit'
import DirectorCreate from './screens/DirectorCreate/DirectorCreate'

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
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/login/' element={<SignIn />} />
        <Route path='/directors/' element={<Directors />} />
        <Route path='/directors/:id' element={<DirectorDetail />} />
        <Route path='/directors/:id/edit' element={<DirectorEdit />} />
        <Route path='/directors/create' element={<DirectorCreate />} />
      </Routes>
    </div>
  );
}

export default App
