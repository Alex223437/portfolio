// AnimatedRouter.jsx
import React, { lazy, Suspense, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Home  = lazy(() => import('./Main/Main'));
const About = lazy(() => import('./About/About'));

const withSuspense = (Comp) => <Suspense fallback={null}><Comp/></Suspense>;

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
        timeout={300}
        unmountOnExit
        appear
      >
        <div ref={nodeRef} className="page-wrap">
          <Routes location={location}>
              <Route path="/" element={withSuspense(Home)} />
              <Route path="/about" element={withSuspense(About)} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}