import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react'
import Layout from './Components/Layout';
import './App.scss'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedRouter from './AnimatedRouter';

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
