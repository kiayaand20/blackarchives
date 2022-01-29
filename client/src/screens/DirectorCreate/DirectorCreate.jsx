import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { createDirector } from '../../services/directors'
import Layout from '../../components/Layout/Layout'
import './DirectorCreate.css'


function DirectorCreate(props) {

  let navigate = useNavigate()

  const [directorcreate, setDirectorCreate] = useState({
    name: '',
    roles: '',
    biography: '',
    image: '',
    films: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setDirectorCreate({
      ...directorcreate,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createDirector(directorcreate)
    navigate('/directors/')
  }


  const { name, roles, biography, image } = directorcreate;

  return (
    <Layout>
      <div className='director-edit'>
        <h1 className='director-edit-title'>Add Director</h1>
      </div>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
          <div className='input-section'>
            <label className='label'>Name:</label>
            <input
              className='input'
              value={name}
              name='name'
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Roles:</label>
            <input
              className='input'
              value={roles}
              name='roles'
              required
              onChange={handleChange}
            />
          </div>

          <div className='input-section'>
            <label className='label'>Biography:</label>
            <input
              className='input'
              rows={10}
              value={biography}
              name='biography'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Image:</label>
            <input
              className='input'
              value={image}
              name='image'
              required
              onChange={handleChange}
            />
          </div>
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>

  )

}

export default DirectorCreate