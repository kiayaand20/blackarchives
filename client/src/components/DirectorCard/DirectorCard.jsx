import './DirectorCard.css'
import { Link } from 'react-router-dom'

function DirectorCard(props) {
  return (
    <div>
      <Link to={`/directors/${props.id}`}>
        <img scr={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </Link>
    </div>
  )
}

export default DirectorCard