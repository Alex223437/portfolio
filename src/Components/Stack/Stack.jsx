import "./Stack.scss";
import Star from "../../assets/img/bg-icons/star.svg";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?url',
});

const srcOf = (file) => (icons[`../../assets/icons/${file}`]?.default ?? icons[`../../assets/icons/${file}`]);

const SKILLS = [
  { key: "html5",      label: "HTML5" },
  { key: "css3",       label: "CSS3" },
  { key: "js",         label: "JavaScript" },
  { key: "react",      label: "React" },
  { key: "redux",      label: "Redux" },
  { key: "bootstrap",  label: "Bootstrap" },
  { key: "tailwind",   label: "Tailwind CSS" },
  { key: "sass",       label: "Sass" },
  { key: "git",        label: "Git" },
  { key: "docker",     label: "Docker" },
  { key: "python",     label: "Python" },
].map(s => ({ ...s, src: srcOf(`${s.key}.svg`) }));

const Stack = () => {
  const [show, setShow] = useState(false);
  const starRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="stack section">
      <CSSTransition
        in={show}
        timeout={800}
        classNames="slide-in"
        unmountOnExit
        nodeRef={starRef}
        appear
      >
        <img ref={starRef} src={Star} alt="Star" className="stack__star" />
      </CSSTransition>
      <div className="container stack__container">
        <div className="stack__text">
          <h2 className="stack__heading heading">My Tech Stack</h2>
          <p className="stack__description text">I have experience with the following technologies:</p>
        </div>
        <ul className="stack__list">
          {SKILLS.map(skill => (
            <li className="stack__item" key={skill.key}>
              <img className="stack__icon" src={skill.src} alt={skill.label} />
            </li>
          ))}
          <li className="stack__item" key="wordpress">
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none">
              <path d="M400.017 3.05176e-05C179.443 3.05176e-05 0.00830078 179.426 0.00830078 399.983C0.00830078 620.557 179.451 800 400.008 800C620.557 800 799.983 620.557 799.983 399.983C799.992 179.435 620.565 3.05176e-05 400.017 3.05176e-05ZM40.3741 399.983C40.3741 347.855 51.5544 298.346 71.5129 253.633L243.067 723.658C123.109 665.353 40.3741 542.336 40.3741 399.983ZM400.017 759.643C364.713 759.643 330.64 754.464 298.421 744.988L406.318 431.446L516.883 734.298C517.598 736.085 518.47 737.714 519.443 739.252C482.061 752.402 441.895 759.643 400.017 759.643ZM449.568 231.372C471.214 230.233 490.74 227.947 490.74 227.947C510.108 225.653 507.839 197.182 488.437 198.321C488.437 198.321 430.191 202.884 392.577 202.884C357.249 202.884 297.847 198.321 297.847 198.321C278.462 197.182 276.201 226.808 295.578 227.947C295.578 227.947 313.932 230.233 333.292 231.372L389.318 384.896L310.615 620.931L179.676 231.38C201.355 230.249 220.84 227.955 220.84 227.955C240.208 225.669 237.922 197.182 218.529 198.346C218.529 198.346 160.308 202.909 122.685 202.909C115.927 202.909 107.972 202.735 99.5428 202.477C163.832 104.83 274.381 40.3658 400.017 40.3658C493.658 40.3658 578.894 76.1596 642.868 134.771C641.313 134.688 639.809 134.48 638.196 134.48C602.884 134.48 577.814 165.254 577.814 198.313C577.814 227.939 594.896 253.026 613.126 282.652C626.816 306.608 642.776 337.39 642.776 381.837C642.776 412.627 630.956 448.338 615.403 498.096L579.534 617.972L449.568 231.372ZM580.806 710.856L690.657 393.25C711.197 341.953 718.005 300.931 718.005 264.431C718.005 251.205 717.14 238.911 715.578 227.448C743.674 278.678 759.659 337.473 759.643 400C759.634 532.668 687.714 648.512 580.806 710.856Z" fill="currentColor"/>
            </svg>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Stack;