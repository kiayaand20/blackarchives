import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './services/users'
import Home from './screens/Home/Home'
import Directors from './screens/Directors/Directors'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import DirectorDetail from './screens/DirectorDetail/DirectorDetail'
import DirectorEdit from './screens/DirectorEdit/DirectorEdit'

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
        <Route path='/' element={<Home user={user} />} />
        <Route path='/directors' element={<Directors user={user} />} />
        <Route path='/user/login/' element={<SignIn setUser={setUser} />} />
        <Route path='/user/signup/' element={<SignUp setUser={setUser} />} />
        <Route path='/directors/:id' element={<DirectorDetail user={user} />} />
        <Route path='/directors/:id/edit' element={<DirectorEdit user={user}/>} />
      </Routes>
    </div>
  );
}

export default App
