import { useState, useEffect } from 'react'
import { getDirectors } from '../../services/directors'
import { Link } from 'react-router-dom'
import './DirectorInfo.css'

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
      <h1 className='all-director-title'>Director List</h1>
        <p className='all-director-sentence'>Did we forget someone? 
        <Link to="/directors/create" style={{textDecoration: "underline"}}> Click Here</Link> to add them.</p>
        {directors.map(director => (
          <Link to={`/directors/${director.id}`}>
            <div className='director-container'>
              <img src={director.image} alt={director.name} />
              <h2 className="director-card">{director.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DirectorCards