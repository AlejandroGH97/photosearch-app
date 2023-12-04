import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/" className="header-title">
        Photo<b>SEARCH</b>
      </Link>
    </header>
  );
}

export default Header;
