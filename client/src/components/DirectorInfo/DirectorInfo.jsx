import { useState, useEffect } from 'react'
import { getDirectors } from '../../services/directors'
import {Link} from 'react-router-dom'

const DirectorCards = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await getDirectors()
      setDirectors(allDirectors)
    }
    fetchDirectors()
  }, [])

  return (
    <div>
      <div>
        {directors.map(director => (
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