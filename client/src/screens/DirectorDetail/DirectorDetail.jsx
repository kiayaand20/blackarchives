import { useState, useEffect } from 'react'
import './DirectorDetail.css'
import Layout from '../../components/Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { getDirector, deleteDirector } from '../../services/directors'

function DirectorDetail(props) {
  const [director, setDirector] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchDirector = async () => {
      const director = await getDirector(id)
      setDirector(director)
      setLoaded(true)
    }

    fetchDirector()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div>
        <img src={director.image} alt={director.name}/>
        <div className='detail'> 
          <p>{director.name}</p>
          <p>{director.roles}</p>
          <p>{director.description}</p>
            <Link to={`/directors/${director.id}/edit`}>
              <button className='edit-button'>
                Edit
              </button>
            </Link>
            <Link className='delete-button' to={'/directors'}>
              <button className='delete-button'
                onClick={() => deleteDirector(director.id)}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default DirectorDetail