import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';
import NavIcon from './NavIcon';
import Submenu from './Submenu';

const GRADIENT_BG = 'linear-gradient(95deg, #2DA172 -157.43%, #020618 91.51%)';
const VERTICAL_BAR_CLASSES = 'absolute left-0 z-10 w-[9px] h-[60px] bg-[#2DA172]';
const GRADIENT_BG_CLASSES = 'absolute inset-0 w-full';
const OPACITY_CLASSES = 'opacity-0 group-hover:opacity-100 transition-opacity';
const LINK_CLASSES = 'group relative flex items-center justify-start h-[60px] w-full pl-[40px] transition-all min-w-0';
const CONTENT_CLASSES = 'relative z-10 flex items-center';
const TEXT_CLASSES = 'text-lg font-medium';

function NavItem({ item, isOpen, isActive, isHovered, onMouseEnter, onMouseLeave, onLinkClick, isActivePath }) {
  const textColorClasses = isActive ? 'text-accent-primary' : 'text-text-primary group-hover:text-accent-primary';

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link
        to={item.path}
        onClick={(e) => onLinkClick(e, item.path)}
        className={LINK_CLASSES}
        title={!isOpen ? item.label : ''}
      >
        {/* Vertical bar for active/hover */}
        <div
          className={`${VERTICAL_BAR_CLASSES} ${isActive ? 'opacity-100 shadow-neon-element' : `${OPACITY_CLASSES} group-hover:shadow-neon-element`}`}
        />

        {/* Gradient background */}
        <div
          className={`${GRADIENT_BG_CLASSES} ${isActive ? 'opacity-100' : OPACITY_CLASSES}`}
          style={{ background: GRADIENT_BG }}
        />

        {/* Content */}
        <div className={CONTENT_CLASSES}>
          <NavIcon iconId={item.iconId} isOpen={isOpen} isActive={isActive} />

          {isOpen && (
            <>
              <span className={`${TEXT_CLASSES} ${textColorClasses}`}>{item.label}</span>
              {item.hasSubmenu && <ArrowIcon isActive={isActive} isHovered={isHovered} />}
            </>
          )}
        </div>
      </Link>

      {item.hasSubmenu && isOpen && (isHovered || isActive) && item.submenu && (
        <Submenu submenu={item.submenu} isActive={isActivePath} onLinkClick={onLinkClick} />
      )}
    </div>
  );
}

export default NavItem;
