import './About.scss';
import Sun from '../../assets/img/sun.svg';

const ListItem = ({ title, type, description, date, place }) => {
  return (
    <li className="about__item">
      <h3 className="about__item-title">{title}</h3>
      <span className="about__item-type">{type}</span>
      {place
      ? <div className="about__item-place">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
          <span className="about__item-place-text">{place}</span>
        </div> 
      :
       <p className="about__item-description">{description}</p>
      }
      <div className="about__item-date">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <span className="about__item-date-text">{date}</span>
      </div>
    </li>
  );
};

const About = () => {
  return (
    <section className="about section">
      <img src={Sun} alt="Sun" className='about__sun'/>
      <div className="container about__container">
        <h2 className="about__heading">About Me</h2>
        <p className="about__description">Originally from Belarus, I moved to the Czech Republic in 2022 to study Software Engineering in Zlín. I’ve just finished my Bachelor’s at Tomas Bata University (2025) and I’m continuing with a Master’s (Ing.). I enjoy crafting clean, responsive interfaces in React and turning ideas into working features.</p>
        <p className="about__description">Outside of code I’ve worked on fast‑paced teams in gastronomy (CZ & USA) — that taught me teamwork, discipline, and staying calm when it’s busy. I’m curious, quick to learn, and motivated to contribute to products that people actually use.</p>
        <h2 className="about__heading">Work Experience</h2>
        <ul className="about__list">
          <ListItem
            title="Freelance Frontend Developer"
            type="Part-Time"
            description="Developed responsive web applications using HTML5, CSS3, JS, React and Redux. Collaborated with designers and other developers to create user-friendly interfaces."
            date="Jan 2023 - Present"
          />
        </ul>
        <h2 className="about__heading">Education</h2>
        <ul className="about__list">
          <ListItem
            title="Bachelor's Degree in Software Engineering"
            type="Full-Time"
            description=""
            date="Sep 2022 - Jun 2025"
            place="Tomas Bata University"
          />
          <ListItem
            title="Master's Degree in Information Technology"
            type="Full-Time"
            description=""
            date="Sep 2025 - Present"
            place="Tomas Bata University"
          />
        </ul>
      </div>
    </section>
  )
}

export default About;