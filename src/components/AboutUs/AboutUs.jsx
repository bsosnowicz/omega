import { useState } from "react";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  const handleClick = (index) => {
    const newIsVisible = [...isVisible];
    newIsVisible[index] = !newIsVisible[index];
    setIsVisible(newIsVisible);
  };

  return (
    <div id="aboutus" className={css.container}>
      <div className={css.headerContainer}>
        <h4 className={css.header}>O nas i pytania.</h4>
        <p className={css.headerDescription}>
          Sekcja często zadawanych pytań i odpowiedzi.{" "}
        </p>
      </div>
      <ul className={css.itemList}>
        {["Pytanie 1", "Pytanie 2", "Pytanie 3", "Pytanie 4"].map(
          (question, index) => (
            <li className={css.item} key={index}>
              <div className={css.itemContainer}>
                <h4 className={css.question}>{question}</h4>
                <button
                  className={isVisible[index] ? css.buttonFlipped : css.button}
                  onClick={() => handleClick(index)}
                >
                  <svg width="18" height="10">
                    <use href="../icons.svg#arrowlist"></use>
                  </svg>
                </button>
              </div>
              {isVisible[index] && (
                <div className={css.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  purus et adipiscing massa. Blandit sit scelerisque quam auctor
                  cursus consectetur pellentesque. Tempor massa nulla integer
                  arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Orci purus et adipiscing massa. Blandit sit scelerisque quam
                  auctor cursus consectetur pellentesque. Tempor massa nulla
                  integer arcu.
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AboutUs;
