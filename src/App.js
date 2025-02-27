import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20"> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Articles/>
                <Skills />
                <Experience />
                <Education/>
                <Volunteering/>
                <Contact/>
              </>
            }
          />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
