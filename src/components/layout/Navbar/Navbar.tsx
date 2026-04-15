import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { scrollTo } from '../../../hooks/useSmoothScroll';
import { BrutalButton } from '../../ui/BrutalButton/BrutalButton';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'sobre-mi',  num: '01', label: 'Sobre mí' },
  { id: 'skills',    num: '02', label: 'Skills'    },
  { id: 'proyectos', num: '03', label: 'Work'      },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(['inicio', ...navLinks.map(l => l.id), 'contacto']);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleLinkClick = (id: string) => {
    setIsMobileOpen(false);
    scrollTo(id);
  };

  return (
    <nav className={clsx(styles.nav, scrolled && styles.scrolled)}>
      {/* Logo */}
      <a 
        href="#inicio" 
        onClick={(e) => { e.preventDefault(); scrollTo('#inicio'); }} 
        className={styles.logo}
        data-hover
      >
        SG<span className={styles.logoDot} />
      </a>
      
      {/* Links de navegación escritorio */}
      <div className={clsx(styles.links, isMobileOpen && styles.mobileOpen)}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(`#${link.id}`); }}
            className={clsx(styles.link, activeSection === link.id && styles.active)}
            data-hover
          >
            <span className={styles.linkNum}>{link.num}.</span> {link.label}
          </a>
        ))}
        
        <BrutalButton 
          variant="acid" 
          onClick={() => handleLinkClick('#contacto')} 
          className={styles.navCta}
          showArrow={false}
        >
          Contactar
        </BrutalButton>
      </div>
      
      {/* Icono Hamburguesa (móvil) */}
      <div 
        className={clsx(styles.menuIcon, isMobileOpen && styles.open)} 
        data-cursor-label={isMobileOpen ? "CLOSE" : "MENU"}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span />
        <span />
      </div>
    </nav>
  );
};
