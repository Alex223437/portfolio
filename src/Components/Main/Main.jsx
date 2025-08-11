import "./Main.scss";
import Me from "../../assets/img/me.png";

const Main = () => {
  return (
    <main className="main">
      <div className="container main__container">
        <h1 className="main__title">
          Hi 👋,<br />
          My name is <br/> <span className="main__title main__title-name">Alexei Sidoryk</span> <br />
          I build fast, accessible <br/>& beautiful web apps
        </h1>
        <img src={Me} alt="" className="main__me" />
      </div>
    </main>
  );
}

export default Main;