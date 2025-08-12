import "./Contact.scss";
import Footer from "../Footer/Footer";
import Telephone from '../../assets/img/bg-icons/telephone.svg';

const Contact = () => {
  return (
    <>
    <section className="contact section">
      <div className="container contact__container">
        <img src={Telephone} alt="Telephone" className="contact__telephone" />
        <h2 className="contact__title">
          Get in Touch
        </h2>
        <div className="contact__items">
          <a href="mailto:alexeisidorik@gmail.com" className="contact__link">alexeisidorik@gmail.com</a>
          <span className="contact__or text">or</span>
          <a href="https://t.me/aliakseisi" className="contact__link">telegram</a>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
};

export default Contact;