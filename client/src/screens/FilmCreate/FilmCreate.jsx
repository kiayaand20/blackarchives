import "./FilmCreate.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createFilms } from "../../services/films";
import { getDirectors } from "../../services/directors";
import Layout from "../../components/Layout/Layout";

function FilmCreate(props) {
  let navigate = useNavigate();
  const [directors, setDirectors] = useState([]);
  const [filmcreate, setFilmCreate] = useState({
    title: "",
    release: "",
    description: "",
    image: "",
    director: "",
  });

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await getDirectors();
      setDirectors(allDirectors);
    };
    fetchDirectors();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilmCreate({
      ...filmcreate,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createFilms(filmcreate);
    navigate(`/directors/`);
  };

  const { title, release, description, image } = filmcreate;

  return (
    <Layout user={props.user}>
      <div className="film-create">
        <h1 className="film-create-title">Add Film</h1>
      </div>
      <div className="film-edit-form">
        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="label">Title:</label>
            <input
              className="input"
              value={title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Release:</label>
            <input
              className="input"
              value={release}
              name="release"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Description:</label>
            <input
              className="input"
              rows={10}
              value={description}
              name="description"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Image:</label>
            <input
              className="input"
              value={image}
              name="image"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">
              <select
                value={directors.name}
                name="director"
                required
                onChange={handleChange}
                options={directors.name}
              >
                <option value="0" selected>
                  Director Name
                </option>
                {directors.map((name) => {
                  return (
                    <option
                      key={name.id}
                      value={name.id}
                      name="director"
                      required
                      onChange={handleChange}
                    >
                      {name.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default FilmCreate;
