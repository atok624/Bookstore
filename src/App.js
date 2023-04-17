import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
