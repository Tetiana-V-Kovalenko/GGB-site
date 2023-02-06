import css from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={css.Footer_section}>
      <div className={css.Footer_container}>
     
        <address className={css.Footer_adress_container}>
          <h3 className={css.Footer_adress_title}>Адрес</h3>
          <p className={css.Footer_adress_subtitle}>04053, м. Київ, вул. Кудрявська, 19-А</p>
          <iframe className={css.Footer_adress_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0548880901238!2d30.497406916200106!3d50.45870257947668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6675aacb35%3A0xd6fe4c415ddff47e!2zMTlBLCDRg9C7LiDQmtGD0LTRgNGP0LLRgdC60LDRjywgMTnQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1675701308907!5m2!1sru!2sua" width="300" height="200"  allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </address>
        <div className={css.Footer_contact_container}>
          <h3 className={css.Footer_contact_title}>Контакти</h3>

          <a href="mailto:"  className={css.Footer_contact_link}>
            Ел. пошта:
          </a>
          <a href="tel:+38(044)201-20-10" className={css.Footer_contact_link}>
            Телефон: +38 (044) 201-20-10
          </a>
          <a href="tel:+38(044)201-20-10" className={css.Footer_contact_link}>
            Факс: +38 (044) 201-20-10
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
