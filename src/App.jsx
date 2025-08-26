import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LoaderComponent from './components/loaderComponent/loaderComponent';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Header from './components/header/header';
import HomePage from './pages/home-page';
import Footer from './components/footer/footer';
import Footer2 from './components/footer/footer2';
import HomePage2 from './pages/home-page2';
import HomePage3 from './pages/home-page3';

function App() {
  const location = useLocation();
  const footer = location.pathname === "/homepage3" ? <Footer2 /> : <Footer />;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/homepage2' element={<HomePage2 />} />
            <Route path='/homepage3' element={<HomePage3 />} />
          </Routes>
          {footer}
        </>
      )}

    </>
  )
}

export default App
