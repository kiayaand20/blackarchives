import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFilm, updateFilms } from '../../services/films'
import Layout from '../../components/Layout/Layout'
import './FilmEdit.css'


function FilmEdit(props) {

  let navigate = useNavigate()

  const [filmedit, setFilmEdit] = useState({
    title: '',
    release: '',
    description: '',
    image: '',
    director: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchFilm = async () => {
      const filmedit = await getFilm(id)
      setFilmEdit(filmedit)
    }
    fetchFilm()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilmEdit({
      ...filmedit,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateFilms(id, filmedit)
    navigate(`/directors/${id}`)
  }

  return (
    <Layout user={props.user}>
      <div className='director-edit'>
        <h1 className='director-edit-title'>Edit Film</h1>
      </div>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
          <div className='input-section'>
            <label className='label'>Title:</label>
            <input
              className='input'
              value={filmedit.title}
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
              value={filmedit.release}
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
              value={filmedit.description}
              name='description'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Image:</label>
            <input
              className='input'
              value={filmedit.image}
              name='image'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Director:</label>
            <input
              className='input'
              value={filmedit.director}
              name='director'
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

export default FilmEdit