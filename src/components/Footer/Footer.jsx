import css from "./Footer.module.css";
import icon from "../../images/icons.svg";

const Footer = () => {
  return (
    <div>
      <div id="contact" className={css.background}></div>
      <div className={css.container}>
        <h4 className={css.header}>Kontakt</h4>
        <ul className={css.itemList}>
          <li className={css.item}>
            <svg width="30" height="30">
              <use href={`${icon}#phone`}></use>
            </svg>
            <a className={css.itemHeader}>Telefon</a>
            <p className={css.itemText}>+48 699 699 699</p>
          </li>
          <li className={css.item}>
            <svg width="30" height="30">
              <use href={`${icon}#mail`}></use>
            </svg>
            <a className={css.itemHeader}>Mail</a>
            <p className={css.itemText}>placeholder@gmail.com</p>
          </li>
          <li className={css.item}>
            <svg width="30" height="30">
              <use href={`${icon}#facebook`}></use>
            </svg>
            <a className={css.itemHeader}>Facebook</a>
            <p className={css.itemText}>OMEGA FIRMA</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
