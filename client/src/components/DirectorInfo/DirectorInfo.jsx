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
      setLoaded(true)
    }
    fetchDirectors()
  }, [])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
      <h1 className='all-director-title'>All Directors</h1>
        <p>Did we forget someone? 
        <Link to="/directors/" style={{textDecoration: "underline"}}> Click Here</Link> to add them.</p>
        {directors.map(director => (
          <Link to={`/directors/${director.id}`}>
            <div>
              <h2 className="director-card">{director.name}</h2>
              <img src={director.image} alt={director.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DirectorCards