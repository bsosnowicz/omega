import css from "./Services.module.css";

const Services = () => {
  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <h3 className={css.header}>Usługi</h3>
        <p className={css.headerDescription}>
          Skontaktuj się z nami po więcej infomacji.
        </p>
      </div>
      <div className={css.itemContainer}>
        <img src="../image1.jpg" />
        <div>
          <h4 className={css.itemHeader}>Sprzątanie pomieszczeń</h4>
          <p className={css.itemDescription}>
            Oferujemy usługi w zakresie sprzątania po zgonach, specjalizując się
            w dezynfekcji, odkażaniu i sprzątaniu miejsc śmierci, pozwalające na
            dalsze wykorzystanie mieszkań. Usuwamy nieprzyjemny zapach ozonując
            skrajnie zaniedbane lokale, komórki i piwnice.
          </p>
          <button className={css.button}>Zadzwoń do nas !</button>
        </div>
      </div>
      <div className={css.itemContainer}>
        <div>
          <h4 className={css.itemHeader}>Usuwanie szkód po pożarach</h4>
        </div>
        <img src="../image1.jpg" />
      </div>
    </div>
  );
};

export default Services;
