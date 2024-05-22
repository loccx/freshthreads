import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import How from './components/How';
import Pricing from './components/Pricing';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav-link" to="/">HOME</Link>
        <Link className="nav-link" to="/about">ABOUT</Link>
        <Link className="nav-link" to="/how">HOW IT WORKS</Link>
        <Link className="nav-link" to="/pricing">PRICING</Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="window">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how" element={<How />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
