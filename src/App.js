import './App.css';

import Header from './components/Header';
import FrontCover from './components/FrontCover';
import Features from './components/Features';
import Extension from './components/Extension';
import Frequently from './components/Frequently';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FrontCover />
      <Features />
      <Extension />
      <Frequently />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
