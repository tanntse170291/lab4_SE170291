import { Link } from "react-router-dom";
import { listfilm } from "./data/ListOfFilms";

export default function Film() {
  const mystyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <>
      <div className="row container">
        {listfilm?.map((film) => (
          <div key={film.id} className="col s12 m4">
            <div className="card">
              <Link to={`/detail/${film.id}`}>
                <div className="card-image">
                  <img src={film.image} style={mystyle} />
                  <span className="card-title">{film.title}</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </a>
                </div>
              </Link>
              <div className="card-content">
                <p>Movie: {film.title}</p>
                <p>Release Year: {film.year}</p>
                <p>Nation: {film.nation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
