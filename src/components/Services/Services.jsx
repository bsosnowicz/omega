import scrollTo from "../../utils/scroll";
import css from "./Services.module.css";
import image1 from "../../images/image1.jpg";
import icon from "../../images/icons.svg";

const Services = () => {
  return (
    <div id="services" className={css.container}>
      <div className={css.headerContainer}>
        <h3 className={css.header}>Usługi</h3>
        <p className={css.headerDescription}>
          Skontaktuj się z nami po więcej infomacji.
        </p>
      </div>
      <div className={css.itemContainer}>
        <img className={css.image} alt="image" src={image1} />
        <div>
          <h4 className={css.itemHeader}>Sprzątanie pomieszczeń</h4>
          <p className={css.itemDescription}>
            Oferujemy usługi w zakresie sprzątania po zgonach, specjalizując się
            w dezynfekcji, odkażaniu i sprzątaniu miejsc śmierci, pozwalające na
            dalsze wykorzystanie mieszkań. Usuwamy nieprzyjemny zapach ozonując
            skrajnie zaniedbane lokale, komórki i piwnice.
          </p>
          <button onClick={() => scrollTo("contact")} className={css.button}>
            {" "}
            <svg width="16" height="10">
              <use href={`${icon}#arrowbutton`}></use>
            </svg>
            <a>Zadzwoń do nas!</a>
          </button>
        </div>
      </div>
      <div className={css.background}></div>
      <div className={`${css.container} ${css.nomargin}`}>
        <div className={css.itemContainerNoMargin}>
          <div className={css.textContainer}>
            <h4 className={css.itemHeader}>Usuwanie szkód po pożarach</h4>
            <p className={css.itemDescription}>
              Wszystkie szkody pożarowe wymagają usunięcia przez specjalistów.
              Nasze działania przeprowadzamy w oparciu o specjalistyczne metody
              w usuwaniu szkód pożarowych:
            </p>
            <ul className={css.itemList}>
              <li>czyszczenie sadzy ze ścian,</li>
              <li>ozonowanie / zmgłamianie, </li>
              <li>dezynfekcja przy użyciu certyfikowanych środków,</li>
              <li>dezodoracja powierzchni</li>
            </ul>
            <button onClick={() => scrollTo("contact")} className={css.button}>
              {" "}
              <svg width="16" height="10">
                <use href={`${icon}#arrowbutton`}></use>
              </svg>
              <a>Zadzwoń do nas!</a>
            </button>
          </div>
          <img className={css.image} alt="image" src={image1} />
        </div>
      </div>
      <div className={`${css.container} ${css.nomargin}`}>
        <div className={css.itemContainer}>
          <img className={css.image} alt="image" src={image1} />
          <div className={css.textContainer}>
            <h4 className={css.itemHeader}>Czyszczenie suchym lodem</h4>
            <p className={css.itemDescription}>
              Nasza firma świadczy usługi czyszczenia przemysłowego oferując
              technologię czyszczenia suchym lodem. Jest to proces:
            </p>
            <ul className={css.itemList}>
              <li>Przyjazny dla środowiska,</li>
              <li>Bez użycia środków chemicznych, </li>
              <li>Nieinwazyjny dla czyszczonych powierzchni,</li>
              <li>
                Idealny dla branży Automotive, Metalurgicznej oraz spożywczej.
              </li>
            </ul>
            <button onClick={() => scrollTo("contact")} className={css.button}>
              {" "}
              <svg width="16" height="10">
                <use href={`${icon}#arrowbutton`}></use>
              </svg>
              <a>Zadzwoń do nas!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
