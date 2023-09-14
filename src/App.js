import React from 'react';
import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Expertise from './components/Expertise/expertise';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Expertise/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
