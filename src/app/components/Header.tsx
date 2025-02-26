"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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
        <img className="logo-header" src="./logo.webp" alt="Logo"/>
        <aside className='nav-links'>
        <Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link>
        <Link href='/peinture-interieur' className={activePath === '/peinture-interieur' ? 'active' : ''}onClick={closeMenu}>Peinture intérieure</Link>
        <Link href='/isolation' className={activePath === '/isolation' ? 'active' : ''}onClick={closeMenu}>Aménagement et Isolation</Link>
        <Link href='/peinture-exterieur' className={activePath === '/peinture-exterieur' ? 'active' : ''}onClick={closeMenu}>Peinture extérieure</Link>
        <Link href='/revetement-de-sols' className={activePath === '/revetement-de-sols' ? 'active' : ''}onClick={closeMenu}>Revetement de sols</Link>   
        <Link href='/contact' className={activePath === '/contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link>
        </aside>
        <aside className='contact_container_header'>
        <a target='_blank' className='contact_info_facebook' href="https://www.facebook.com/profile.php?id=100079740254760"> 
          <img className="contact_icon_facebook" alt="icon_facebook" src="facebook-brands-solid.svg"></img>
        </a>        
        <aside className='contact_content_header'>
        <a href="mailto:alexisdurand341@gmail.com">
          <img className='icon_mail' alt='icon_mail' src='envelope-regular.svg'></img>
        </a>
        <a href="tel:+33656772792">
          <img className='icon_phone' alt='icon_phone' src='phone-solid.svg'></img>
        </a>
        </aside>
        </aside>
      </nav>
      <div className="mobile-menu">
      <Link className='logo_link_header' href="/">
        <img className="logo-header" src="./logo.webp" alt="Logo"/>
        </Link>
        <div id="menuToggle">
        <a href="tel:+33656772792">
          <img className='icon_phone' alt='icon_phone' src='phone-solid.svg'></img>
        </a>
        <label htmlFor="menu">    
          <input id='menu' name="menu" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
        </label>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link></li>
            <li><Link href='/peinture-interieur' className={activePath === '/peinture-interieur' ? 'active' : ''}onClick={closeMenu}>Peinture intérieure</Link></li>
            <li><Link href='/isolation' className={activePath === '/isolation' ? 'active' : ''}onClick={closeMenu}>Aménagement et Isolation</Link></li>           
            <li><Link href='/peinture-exterieur' className={activePath === '/peinture-exterieur' ? 'active' : ''}onClick={closeMenu}>Peinture extérieure</Link></li>           
            <li><Link href='/revetement-de-sols' className={activePath === '/revetement-de-sols' ? 'active' : ''}onClick={closeMenu}>Revetement de sols</Link></li>        
            <li><Link href='/contact' className={activePath === '/contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link></li>
            <aside className='contact_container_header'>
            <a target='_blank' className='contact_info_facebook' href="https://www.facebook.com/profile.php?id=100079740254760"> 
                <img className="contact_icon_facebook" alt="icon_facebook" src="facebook-brands-solid.svg"></img>
                </a>  
                <a href="mailto:alexisdurand341@gmail.com">         
            <img className='icon_mail' alt='icon_mail' src='envelope-regular.svg'></img>
            </a>
        </aside>
          </ul>
        </div>
      </div>
            </header>
  );
};


export default Header;