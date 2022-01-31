// import './Director.css'
import { Link } from "react-router-dom";

function Director(props) {
  return (
    <div>
      <Link to={`/directors/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <div>{props.name}</div>
        <div>{props.roles}</div>
        <div>{props.biography}</div>
      </Link>
    </div>
  );
}

export default Director;
