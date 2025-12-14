import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { navItems } from './navItems';
import SidebarLogo from './SidebarLogo';

const SIDEBAR_BASE_CLASSES =
  'fixed z-12 left-0 shadow-neon top-0 bg-background-sidebar transition-all duration-300 flex flex-col overflow-x-hidden';
const NAV_CLASSES = 'flex items-start pt-[50px] overflow-y-auto overflow-x-hidden flex-1 min-h-0 xl:pt-[50px]';
const NAV_CONTAINER_CLASSES = 'flex flex-col w-full gap-[20px] min-w-0 pb-[20px]';

function Sidebar({ isMobileMenuOpen, onCloseMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen && onCloseMobileMenu) {
      onCloseMobileMenu();
      return;
    }

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (onCloseMobileMenu) {
          onCloseMobileMenu();
        }
      } else if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen && onCloseMobileMenu) {
          onCloseMobileMenu();
        } else if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, isMobileMenuOpen, onCloseMobileMenu]);

  useEffect(() => {
    const body = document.body;
    const footer = document.querySelector('footer');
    const footerHeight = footer ? footer.offsetHeight : 0;

    if (isOpen) {
      body.classList.add('sidebar-open');
      body.style.setProperty('--footer-height', `${footerHeight}px`);
    } else {
      body.classList.remove('sidebar-open');
    }

    return () => {
      body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  const sidebarIsOpen = isMobileMenuOpen || isOpen;

  const sidebarClasses = isMobileMenuOpen
    ? `${SIDEBAR_BASE_CLASSES} w-full top-[94px] h-[calc(100vh-94px)] z-30 xl:hidden`
    : `${SIDEBAR_BASE_CLASSES} ${isOpen ? 'w-[290px]' : 'w-[100px]'} h-screen max-h-[1080px] z-10 hidden xl:flex`;

  const handleLogoClick = () => {
    if (isMobileMenuOpen && onCloseMobileMenu) {
      onCloseMobileMenu();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobileMenuOpen) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  const handleMouseDown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={sidebarClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      <SidebarLogo isOpen={sidebarIsOpen} onLogoClick={handleLogoClick} />

      <nav className={NAV_CLASSES}>
        <div className={NAV_CONTAINER_CLASSES}>
          {navItems.map((item) => {
            const active = isActive(item.path);
            const isHovered = hoveredSubmenu === item.path;

            return (
              <NavItem
                key={item.path}
                item={item}
                isOpen={sidebarIsOpen}
                isActive={active}
                isHovered={isHovered}
                onMouseEnter={() => item.hasSubmenu && sidebarIsOpen && setHoveredSubmenu(item.path)}
                onMouseLeave={() => setHoveredSubmenu(null)}
                onLinkClick={handleLinkClick}
                isActivePath={isActive}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
