// Main.jsx
import "./Main.scss";
import Me from "../../assets/img/me.png";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Main = () => {
  const [show, setShow] = useState(false);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="container main__container">
        {/* Заголовок */}
        <CSSTransition
          in={show}
          timeout={800}
          classNames="fade-slide"
          unmountOnExit
          nodeRef={textRef}
          appear
        >
          <h1 ref={textRef} className="main__title gradient-text">
            Hi 👋,<br />
            My name is <br /> 
            <span className="main__title-name">Alexei Sidoryk</span> <br />
            I build fast, accessible <br /> & beautiful web apps
          </h1>
        </CSSTransition>

        {/* Фото */}
        <CSSTransition
          in={show}
          timeout={1000}
          classNames="fade-scale"
          unmountOnExit
          nodeRef={imgRef}
          appear
        >
          <img ref={imgRef} src={Me} alt="Alexei Sidoryk" className="main__me" />
        </CSSTransition>
      </div>
    </main>
  );
};

export default Main;