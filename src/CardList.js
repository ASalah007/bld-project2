import React from "react";
import utils from "./utils";
import Card from "./Card.js";
import styles from "./CardList.module.css";

function CardList(props) {
  const cardsPerSlide = props.cardsPerSlide;
  const courses = props.courses;
  const cardsCount = courses.length;
  const slidesCount = cardsCount / cardsPerSlide;

  return (
    <div id="courses" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {utils.range(slidesCount).map((_, i) => (
          <div key={i} className={"carousel-item " + (i === 0 ? "active" : "")}>
            <div className="d-flex">
              {utils.range(cardsPerSlide).map((_, j) => (
                <Card key={i * j + j} {...courses[i * j + j]} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className={"carousel-control-prev " + styles.button}
        type="button"
        data-bs-target="#courses"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className={"carousel-control-next " + styles.button}
        type="button"
        data-bs-target="#courses"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default CardList;
