import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createFilms } from '../../services/films'
import Layout from '../../components/Layout/Layout'
import './FilmCreate.css'


function FilmCreate(props) {

  let navigate = useNavigate()

  const [filmcreate, setFilmCreate] = useState({
    title: '',
    release: '',
    description: '',
    image: '',
    director: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilmCreate({
      ...filmcreate,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createFilms(filmcreate)
    navigate(`/directors`)
  }


  const { title, release, description, image, director } = filmcreate;

  return (
    <Layout user={props.user}>
      <div className='director-edit'>
        <h1 className='director-edit-title'>Add Film</h1>
      </div>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
          <div className='input-section'>
            <label className='label'>Title:</label>
            <input
              className='input'
              value={title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Release:</label>
            <input
              className='input'
              value={release}
              name='release'
              required
              onChange={handleChange}
            />
          </div>

          <div className='input-section'>
            <label className='label'>Description:</label>
            <input
              className='input'
              rows={10}
              value={description}
              name='description'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Director:</label>
            <input
              className='input'
              rows={10}
              value={director}
              name='director'
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

export default FilmCreate