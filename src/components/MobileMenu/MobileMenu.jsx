import scrollTo from "../../utils/scroll";
import css from "./MobileMenu.module.css";

const MobileMenu = ({ setIsVisible }) => {
  return (
    <div className={css.container}>
      <div className={css.itemContainer}>
        <div className={css.headerContainer}>
          <h4 className={css.header}>OMEGA</h4>
          <button onClick={() => setIsVisible(false)}>X</button>
        </div>
        <ul className={css.itemList}>
          <li
            onClick={() => {
              scrollTo("aboutus");
              setIsVisible(false);
            }}
            className={css.item}
          >
            O nas
          </li>
          <li
            onClick={() => {
              scrollTo("services");
              setIsVisible(false);
            }}
            className={css.item}
          >
            Usługi
          </li>
          <li
            onClick={() => {
              scrollTo("contact");
              setIsVisible(false);
            }}
            className={css.item}
          >
            Kontakt
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
