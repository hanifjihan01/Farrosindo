import React, { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#brands">Brands</a></li>
          <li><a href="#innovation">Innovation</a></li>
          <li><a href="#csr">CSR</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#scholarship">Scholarship</a></li>
          <li><a href="#news">News</a></li>
          <li className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
