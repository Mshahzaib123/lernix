import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LoaderComponent from './components/loaderComponent/loaderComponent';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Header from './components/header/header';
import HomePage from './pages/home-page';
import HomePage2 from './pages/home-page2';
import HomePage3 from './pages/home-page3';
import AboutPage from './pages/about-page';
import TeamPage from './pages/team-page';
import TeamDetails from './pages/team-details';
import PrivacyPolicy from './pages/privacy-policy';
import TermsConditions from './pages/terms-conditions';
import CoursesList from './pages/courses-list';
import CoursesGrid from './pages/courses-grid';
import CourseDetails from './pages/course-details';
import CoursesWithSidebar from './pages/courses-with-sidebar';
import Footer from './components/footer/footer';
import BlogStandard from './pages/blog-standard';
import BlogDetail from './pages/blog-detail';
import BlogWithoutSidebar from './pages/blog-without-sidebar';
import BlogWithSidebar from './pages/blog-with-sidebar';
import ContactUs from './pages/contact';
import Footer2 from './components/footer/footer2';
import CategoryPage from './pages/category-page';

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
            <Route path='/about' element={<AboutPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/team-detail/' element={<TeamDetails />} />
            <Route path='/team-detail/:id' element={<TeamDetails />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='/courses-list-view' element={<CoursesList />} />
            <Route path='/courses-grid-view' element={<CoursesGrid />} />
            <Route path='/courses-detail/' element={<CourseDetails />} />
            <Route path='/courses-detail/:id' element={<CourseDetails />} />
            <Route path='/courses-with-sidebar' element={<CoursesWithSidebar />} />
            <Route path="/blog-standard" element={<BlogStandard />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
            <Route path="/blog-without-sidebar" element={<BlogWithoutSidebar />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
          {footer}
        </>
      )}

    </>
  )
}

export default App
