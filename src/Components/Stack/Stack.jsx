import "./Stack.scss";
import Star from "../../assets/img/star.svg";

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
  return (
    <section className="stack section">
      <img src={Star} alt="Star" className="stack__star" />
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