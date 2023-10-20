import { listfilm } from "./data/ListOfFilms";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ModalCase from "./ModalCase";

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const thisfilm = listfilm?.find((film) => String(film.id) === id);
  return (
    <>
      <div className="row container">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img src={thisfilm.detailImg} />
              <span className="card-title">{thisfilm.title}</span>
              <a
                onClick={() => setIsOpen(true)}
                class="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i class="material-icons">ondemand_video</i>
              </a>
              {isOpen && (
                <ModalCase setIsOpen={setIsOpen} thisfilm={thisfilm} />
              )}
            </div>
            <div className="card-content">
              <p>{thisfilm.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
