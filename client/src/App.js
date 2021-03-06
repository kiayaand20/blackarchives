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
import FilmCreate from './screens/FilmCreate/FilmCreate'
import FilmEdit from './screens/FilmEdit/FilmEdit'

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
        <Route path='/' element={<Home user={user} />} />
        <Route path='/user/login/' element={<SignIn setUser={setUser} />} />
        <Route path='/sign-out' element={<SignOut setUser={setUser}/>} />
        <Route path='/directors/' element={<Directors user={user} />} />
        <Route path='/directors/:id' element={<DirectorDetail user={user}/>} />
        <Route path='/directors/:id/edit' element={<DirectorEdit user={user} />} />
        <Route path='/directors/create' element={<DirectorCreate user={user} />} />
        <Route path='/films/create' element={<FilmCreate user={user} />} />
        <Route path='/films/:id/edit' element={<FilmEdit user={user} />} />
      </Routes>
    </div>
  );
}

export default App
