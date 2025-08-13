import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Home      from './Components/Main/Main';
import About     from './Components/About/About';
import TechStack from './Components/Stack/Stack';
import Projects  from './Components/Projects/Projects';
import Contact   from './Components/Contact/Contact';

export default function AnimatedRouter() {
  const location = useLocation();

  const refs = useRef(new Map());
  const getRef = (key) => {
    if (!refs.current.has(key)) refs.current.set(key, React.createRef());
    return refs.current.get(key);
  };
  const nodeRef = getRef(location.pathname);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        classNames="page"
        timeout={400}
        unmountOnExit
        appear
      >
        <div ref={nodeRef} className="page-wrap">
          <Routes location={location}>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}