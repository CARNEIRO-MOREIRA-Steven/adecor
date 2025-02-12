"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });}

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);
  return (
    <header>
      <nav className="desktop-nav">
        <img className="logo-header" src="./logo.jpg" alt="Logo"/>
        <aside className='nav-links'>
        <Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link>
        <Link href='/#tatoueuse' className={activePath === '#prestations' ? 'active' : ''}onClick={closeMenu}>Nos prestations et réalisations</Link>     
         {/* <Link href='/faq' className={activePath === '/faq' ? 'active' : ''}onClick={closeMenu}>FAQ</Link> */}
        <Link href='/#contact' className={activePath === '#contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link>
        </aside>
        <aside className='contact_container_header'>
        <img className='icon_facebook' src='facebook-brands-solid.svg'></img>
        <aside className='contact_content_header'>
        <img src='envelope-regular.svg'></img>
        <img src='phone-solid.svg'></img>
        </aside>
        </aside>
      </nav>
      <div className="mobile-menu">
      <Link className='logo_link_header' href="/">
        <img className="logo-header" src="./logo.jpg" alt="Logo"/>
        </Link>
        <div id="menuToggle">
        <label htmlFor="menu"></label>
          <input id='menu' name="menu" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link></li>
            <li><Link href='/#tatoueuse' className={activePath === '/#prestations' ? 'active' : ''}onClick={closeMenu}>Nos prestations et réalisations</Link></li>
            <li><Link href='/#contact' className={activePath === '/#contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link></li>
            <aside className='contact_container_header'>
        <img className='icon_facebook' src='facebook-brands-solid.svg'></img>
        <img className='icon_mail'src='envelope-regular.svg'></img>
        <img className='icon_phone'src='phone-solid.svg'></img>
        </aside>
          </ul>
        </div>
      </div>
            </header>
  );
};


export default Header;