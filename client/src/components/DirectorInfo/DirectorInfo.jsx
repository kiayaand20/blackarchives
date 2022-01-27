import { useState, useEffect } from 'react'
import { getDirectors } from '../../services/directors'
import {Link} from 'react-router-dom'

const DirectorCards = () => {
  const [directors, setDirectors] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await getDirectors()
      setDirectors(allDirectors)
    }
    fetchDirectors()
  }, [])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
        {directors && 
        directors.map(director => (
          <Link to={`/directors/${director.id}`}>
            <div className="director-card">
              <h2>{director.name}</h2>
              <img src={director.image} alt={director.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DirectorCards