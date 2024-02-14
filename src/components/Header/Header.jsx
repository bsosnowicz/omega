import scrollTo from "../../utils/scroll";
import css from "./Header.module.css";
import icon from "../../images/icons.svg";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <h2>OMEGA</h2>
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
        <button className={css.button}>
          <svg width="16" height="10">
            <use href={`${icon}#arrowbuttonblack`}></use>
          </svg>
          <a onClick={() => scrollTo("contact")}>Zadzwoń do nas!</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
