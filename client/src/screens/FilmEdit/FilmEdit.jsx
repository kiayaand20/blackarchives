import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFilm, updateFilms } from '../../services/films'
import { getDirectors } from '../../services/directors'
import Layout from '../../components/Layout/Layout'
import './FilmEdit.css'


function FilmEdit(props) {

  let navigate = useNavigate()
  const [directors, setDirectors] = useState([])
  const [filmedit, setFilmEdit] = useState({
    title: '',
    release: '',
    description: '',
    image: '',
    director: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await getDirectors()
      setDirectors(allDirectors)
    }
    fetchDirectors()
  }, [])

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
    navigate(`/directors/`)
  }

  return (
    <Layout user={props.user}>
      <div className='film-edit'>
        <h1 className='film-edit-title'>Edit Film</h1>
      </div>
      <div className='film-edit-form'>
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
            <label className='label'>
            <select
              value={directors.name}
              name='director'
              required
              onChange={handleChange}
              options={directors.name}
            >
              <option
                value='0'
                selected>Director Name</option>
                  {directors.map((name) => {
                    return <option key={name.id}
                      value={name.id} name='director'
                      required
                      onChange={handleChange}
                    >{name.name}
              </option>
            })}
            </select>
            </label>
          </div>
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>

  )

}

export default FilmEdit