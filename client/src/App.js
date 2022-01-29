import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser} from './services/users'
import Home from './screens/Home/Home'
import Directors from './screens/Directors/Directors'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import DirectorDetail from './screens/DirectorDetail/DirectorDetail'
import DirectorEdit from './screens/DirectorEdit/DirectorEdit'
import DirectorCreate from './screens/DirectorCreate/DirectorCreate'

function App() {
  const [user, setUser] = useState(false)

    useEffect(() => {
      const fetchUser = async () => {
        const res = await verifyUser();
        res ? setUser(true) : setUser(false);
      };
      fetchUser();
    }, []);
  
  
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/user/login/' element={<SignIn setUser={setUser} />} />
        <Route path='/sign-out' element={<SignOut setUser={setUser}/>} />
        <Route path='/directors/' element={<Directors  />} />
        <Route path='/directors/:id' element={<DirectorDetail  />} />
        <Route path='/directors/:id/edit' element={<DirectorEdit user={user} />} />
        <Route path='/directors/create' element={<DirectorCreate user={user} />} />
      </Routes>
    </div>
  );
}

export default App
