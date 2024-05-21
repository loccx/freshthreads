import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

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
        <Link className="nav-link" to="/how">HOW</Link>
        <Link className="nav-link" to="/pricing">PRICING</Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how" element={<How />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
