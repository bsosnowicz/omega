import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <h2>OMEGA</h2>
        <ul className={css.list}>
          <li>O nas</li>
          <li>Usługi</li>
          <li>Kontakt</li>
        </ul>
        <button className={css.button}>Zadzwoń do nas!</button>
      </div>
    </div>
  );
};

export default Header;
