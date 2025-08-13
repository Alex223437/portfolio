import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import './App.scss'
import AnimatedRouter from './AnimatedRouter';
import { initTheme } from './Components/Theme/theme';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App
