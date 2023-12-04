import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import TrendingGallery from './components/TrendingGallery/TrendingGallery';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" exact element={<TrendingGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
