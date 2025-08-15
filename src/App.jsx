import { HashRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import './App.scss'
import AnimatedRouter from './AnimatedRouter';
import { initTheme } from './Components/Theme/theme';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <HashRouter>
      <Layout>
        <AnimatedRouter />
        <Toaster
         position='top-left'
         toastOptions={{
          style: {
            border: "2px solid transparent",
            backgroundClip: "padding-box, border-box",
            backgroundImage: `linear-gradient(rgba(30,41,59,0.6), rgba(30,41,59,0.6)), 
                              linear-gradient(90deg, #D18B47 20%, #7C89C5 120%)`,
            borderRadius: "12px",
            backdropFilter: "blur(16px)",
            color: "#fff",
            padding: "14px 18px",
            fontSize: "16px",
            fontWeight: 500,
          },
        }}/>
      </Layout>
    </HashRouter>
  );
}

export default App;
