import { useState, useEffect } from 'react'
import DirectorCard from '../DirectorCard/DirectorCard'
import { getDirectors } from '../../services/directors'

const DirectorCards = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await getDirectors()
      setDirectors(allDirectors)
    }
    fetchDirectors()
  }, [])

  const CARDS = directors.map((director, index) =>
    index < 120 ? (
      <DirectorCard
        id={director.id}
        image={director.image}
        name={director.name}
        roles={director.roles}
        biography={director.biography}
        key={index}
      />
    ) : null
  )

  return (
    <div>
      <div>{CARDS}</div>
    </div>
  )
}

export default DirectorCards