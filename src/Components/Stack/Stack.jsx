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
  { key: "wordpress",  label: "WordPress" },
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
        </ul>
      </div>
    </section>
  )
};

export default Stack;