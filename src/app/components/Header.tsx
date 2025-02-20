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
        <img className="logo-header" src="./logo.jpg" alt="Logo"/>
        <aside className='nav-links'>
        <Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link>
        <div className='subnav'
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}>
          <span className='title_subnav'>Nos prestations et réalisations</span>
          {isSubMenuOpen && (
          <ul className='subnav_link_container'>
                    <li><Link href='/peinture-interieur' className={activePath === '/peinture-interieur' ? 'active' : ''}onClick={closeMenu}>Peinture intérieur</Link></li>
                    <li><Link href='/isolation' className={activePath === '/isolation' ? 'active' : ''}onClick={closeMenu}>Isolation</Link></li>           
                    <li><Link href='/decoration' className={activePath === '/decoration' ? 'active' : ''}onClick={closeMenu}>Décoration</Link></li>           
                    <li><Link href='/peinture-exterieur' className={activePath === '/peinture-exterieur' ? 'active' : ''}onClick={closeMenu}>Peinture extérieur</Link></li>           
                    <li><Link href='/revetement-de-sols' className={activePath === '/revetement-de-sols' ? 'active' : ''}onClick={closeMenu}>Revetement de sols</Link></li>        
                    <li><Link href='/amenagement-interieur' className={activePath === '/amenagement-interieur' ? 'active' : ''}onClick={closeMenu}>Aménagement intérieur</Link></li>          
          
          </ul>
          )}
        </div>     
        <Link href='/contact' className={activePath === '/contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link>
        </aside>
        <aside className='contact_container_header'>
        <img className='icon_facebook' alt='icon_facebook' src='facebook-brands-solid.svg'></img>
        <aside className='contact_content_header'>
        <img className='icon_mail' alt='icon_mail' src='envelope-regular.svg'></img>
        <img className='icon_phone' alt='icon_phone' src='phone-solid.svg'></img>
        </aside>
        </aside>
      </nav>
      <div className="mobile-menu">
      <Link className='logo_link_header' href="/">
        <img className="logo-header" src="./logo.jpg" alt="Logo"/>
        </Link>
        <div id="menuToggle">
        <img className='icon_phone' alt='icon_phone' src='phone-solid.svg'></img>
        <label htmlFor="menu"></label>
          <input id='menu' name="menu" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}onClick={closeMenu}>Accueil</Link></li>
            <div className='subnav'
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}>
          <span className='title_subnav'>Nos prestations et réalisations</span>
          {isSubMenuOpen && (
          <ul className='subnav_link_container'>
                    <li><Link href='/peinture-interieur' className={activePath === '/peinture-interieur' ? 'active' : ''}onClick={closeMenu}>Peinture intérieur</Link></li>
                    <li><Link href='/isolation' className={activePath === '/isolation' ? 'active' : ''}onClick={closeMenu}>Isolation</Link></li>           
                    {/* <li><Link href='/decoration' className={activePath === '/decoration' ? 'active' : ''}onClick={closeMenu}>Décoration</Link></li>            */}
                    <li><Link href='/peinture-exterieur' className={activePath === '/peinture-exterieur' ? 'active' : ''}onClick={closeMenu}>Peinture extérieur</Link></li>           
                    <li><Link href='/revetement-de-sols' className={activePath === '/revetement-de-sols' ? 'active' : ''}onClick={closeMenu}>Revetement de sols</Link></li>        
                    {/* <li><Link href='/amenagement-interieur' className={activePath === '/amenagement-interieur' ? 'active' : ''}onClick={closeMenu}>Aménagement intérieur</Link></li>           */}
          
          </ul>
          )}
        </div>              <li><Link href='/contact' className={activePath === '/contact' ? 'active' : ''}onClick={closeMenu}>Contact</Link></li>
            <aside className='contact_container_header'>
        <img className='icon_facebook' alt='icon_facebook' src='facebook-brands-solid.svg'></img>
        <img className='icon_mail' alt='icon_mail' src='envelope-regular.svg'></img>
        </aside>
          </ul>
        </div>
      </div>
            </header>
  );
};


export default Header;