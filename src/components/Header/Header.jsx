import scrollTo from "../../utils/scroll";
import css from "./Header.module.css";
import icon from "../../images/icons.svg";

const Header = ({ setIsVisible }) => {
  return (
    <div className={css.header}>
      <div className={css.background}></div>
      <div className={css.container}>
        <h2 className={css.title}>OMEGA</h2>
        <ul className={css.list}>
          <li onClick={() => scrollTo("services")} className={css.item}>
            Usługi
          </li>
          <li onClick={() => scrollTo("aboutus")} className={css.item}>
            O nas
          </li>
          <li onClick={() => scrollTo("contact")} className={css.item}>
            Kontakt
          </li>
        </ul>
        <button onClick={() => scrollTo("contact")} className={css.button}>
          <svg width="16" height="10">
            <use href={`${icon}#arrowbuttonblack`}></use>
          </svg>
          <a>Zadzwoń do nas!</a>
        </button>
        <button onClick={() => setIsVisible(true)} className={css.hamburger}>
          HAM
        </button>
      </div>
    </div>
  );
};

export default Header;
