import scrollTo from "../../utils/scroll";
import css from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={css.container}>
      <a className={css.headerDescription}>Firma sprzątająca</a>
      <h2 className={css.header}>OMEGA</h2>
      <p className={css.description}>
        Jesteśmy profesjonalną firmą sprzątającą, której doświadczona ekipa jest
        w pełni gotowa do realizowania wszystkich działań, związanych ze
        specjalistyczną obsługą w zakresie utrzymywania czystości dla przemysłu
        oraz klienta indywidualnego.
      </p>
      <button onClick={() => scrollTo("contact")} className={css.button}>
        <svg width="16" height="10">
          <use href="../icons.svg#arrowbutton"></use>
        </svg>
        Zadzwoń do nas!
      </button>
    </div>
  );
};

export default Banner;
