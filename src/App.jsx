import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react'
import Layout from './Components/Layout';
import './App.scss'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedRouter from './Components/AnimatedRouter';

// const Home = lazy(() => import('./Components/Main/Main'));
// const About= lazy(() => import('./Components/About/About'));

// const Router = () => {
//   const location = useLocation();

//   return (
//     <TransitionGroup component={null}>
//       <CSSTransition
//         key={location.pathname}
//         classNames="page"
//         timeout={300}
//         unmountOnExit
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes location={location} key={location.key}>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </Suspense>
//       </CSSTransition>
//     </TransitionGroup>
    
//   );
// }

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App
