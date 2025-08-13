import "./Header.scss"
import Logo from "../../assets/img/logo.svg"  
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tech-stack", label: "Tech Stack" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const mobileMenu = () => {
  const nav = document.querySelector('.header__nav');
  const burger = document.querySelector('.header__burger');

  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  } else {
    document.body.style.overflow = '';
    document.removeEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

const renderNavItem = (item) => (
  <li className="header__item" key={item.to}>
    <NavLink
      onClick={mobileMenu}
      to={item.to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {item.label}
    </NavLink>
  </li>
);

const Header = () => {

  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="/" className="header__logo">
          <img src={Logo} alt="Logo" className="header__logo-img"/>
        </NavLink>
        <nav className="header__nav">
          <ul className="header__list">
            {navItems.map(renderNavItem)}
          </ul>
          <div className="header__social">
            <a href="https://github.com/Alex223437" className="header__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://t.me/aliakseisi" className="header__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="5 5 30 30" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20ZM20.5375 16.0737C19.0786 16.6805 16.1627 17.9365 11.7899 19.8417C11.0798 20.124 10.7078 20.4003 10.674 20.6704C10.6167 21.1269 11.1884 21.3066 11.9668 21.5514C12.0727 21.5847 12.1824 21.6192 12.2949 21.6558C13.0608 21.9047 14.091 22.196 14.6266 22.2075C15.1124 22.218 15.6547 22.0177 16.2533 21.6067C20.3389 18.8488 22.448 17.4548 22.5804 17.4247C22.6738 17.4035 22.8032 17.3769 22.891 17.4548C22.9787 17.5328 22.97 17.6804 22.9608 17.72C22.9041 17.9614 20.6602 20.0476 19.4989 21.1272C19.1369 21.4638 18.8801 21.7025 18.8276 21.757C18.71 21.8792 18.5902 21.9947 18.475 22.1058C17.7635 22.7917 17.2299 23.306 18.5045 24.146C19.1171 24.5496 19.6072 24.8834 20.0962 25.2164C20.6302 25.5801 21.1629 25.9428 21.852 26.3946C22.0276 26.5097 22.1953 26.6292 22.3586 26.7457C22.9801 27.1887 23.5384 27.5868 24.2282 27.5233C24.6291 27.4864 25.0431 27.1095 25.2533 25.9854C25.7503 23.3289 26.727 17.5731 26.9528 15.2012C26.9726 14.9934 26.9477 14.7275 26.9277 14.6107C26.9077 14.494 26.866 14.3276 26.7142 14.2045C26.5345 14.0587 26.257 14.0279 26.133 14.0301C25.5688 14.04 24.7032 14.341 20.5375 16.0737Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/alexei-sidoryk/" className="header__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_21_37)">
                  <path
                    d="M15 0.600098C7.04701 0.600098 0.600006 7.0471 0.600006 15.0001C0.600006 22.9531 7.04701 29.4001 15 29.4001C22.953 29.4001 29.4 22.9531 29.4 15.0001C29.4 7.0471 22.953 0.600098 15 0.600098ZM11.475 20.9686H8.55901V11.5846H11.475V20.9686ZM9.99901 10.4326C9.07801 10.4326 8.48251 9.7801 8.48251 8.9731C8.48251 8.1496 9.09601 7.5166 10.0365 7.5166C10.977 7.5166 11.553 8.1496 11.571 8.9731C11.571 9.7801 10.977 10.4326 9.99901 10.4326ZM22.125 20.9686H19.209V15.7681C19.209 14.5576 18.786 13.7356 17.7315 13.7356C16.926 13.7356 16.4475 14.2921 16.236 14.8276C16.158 15.0181 16.1385 15.2881 16.1385 15.5566V20.9671H13.221V14.5771C13.221 13.4056 13.1835 12.4261 13.1445 11.5831H15.678L15.8115 12.8866H15.87C16.254 12.2746 17.1945 11.3716 18.768 11.3716C20.6865 11.3716 22.125 12.6571 22.125 15.4201V20.9686Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_21_37">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <button className="header__close" onClick={mobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="525" height="525" viewBox="0 0 525 525" fill="none">
              <path d="M15.5002 15.5002C24.8765 6.1266 37.592 0.86084 50.8502 0.86084C64.1084 0.86084 76.8238 6.1266 86.2002 15.5002L263 192.3L439.8 15.5002C449.23 6.39225 461.86 1.35254 474.97 1.46646C488.08 1.58038 500.621 6.83883 509.891 16.1092C519.161 25.3796 524.42 37.9203 524.534 51.0301C524.648 64.1399 519.608 76.7701 510.5 86.2002L333.7 263L510.5 439.8C519.608 449.23 524.648 461.86 524.534 474.97C524.42 488.08 519.161 500.621 509.891 509.891C500.621 519.161 488.08 524.42 474.97 524.534C461.86 524.648 449.23 519.608 439.8 510.5L263 333.7L86.2002 510.5C76.7701 519.608 64.1399 524.648 51.0301 524.534C37.9203 524.42 25.3796 519.161 16.1092 509.891C6.83883 500.621 1.58038 488.08 1.46646 474.97C1.35254 461.86 6.39225 449.23 15.5002 439.8L192.3 263L15.5002 86.2002C6.1266 76.8238 0.86084 64.1084 0.86084 50.8502C0.86084 37.592 6.1266 24.8765 15.5002 15.5002Z" fill="currentColor"/>
            </svg>
          </button>
        </nav>
        <button className="header__burger" onClick={mobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="534" height="400" viewBox="0 0 534 400" fill="none">
            <path d="M33.667 366.667H300.334M33.667 200H500.334M233.667 33.3335H500.334" stroke="currentColor" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  )
};

export default Header;