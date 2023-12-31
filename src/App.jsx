import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import SearchBar from './components/SearchBar';
import SearchGallery from './components/SearchGallery';
import TrendingGallery from './components/TrendingGallery';
import Header from './components/Header';

function App() {
  const [tagInput, setTagInput] = useState('');

  return (
    <Router>
      <Header />
      <div className='gallery-container'>
        <SearchBar tagInput={tagInput} setTagInput={setTagInput} />
        <main>
          <section className="photo-gallery">
            <Routes>
              <Route path="/" exact element={<TrendingGallery />} />
              <Route
                path="/tag/:tagName"
                element={<SearchGallery setTagInput={setTagInput} />}
              />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
