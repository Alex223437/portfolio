import { HashRouter } from 'react-router-dom';
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
    <HashRouter>
      <Layout>
        <AnimatedRouter />
      </Layout>
    </HashRouter>
  );
}

export default App;
