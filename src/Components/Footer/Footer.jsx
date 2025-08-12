import './Footer.scss';
import Logo from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <img src={Logo} alt="Logo" className="footer__logo" />
        <p className="footer__text">© 2025 Alexei Sidoryk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;