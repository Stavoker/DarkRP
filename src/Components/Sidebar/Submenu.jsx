import { Link } from 'react-router-dom';

const SUBMENU_CONTAINER_CLASSES = 'grid gap-[20px] ml-[95px] pt-[20px]';
const SUBMENU_LINK_BASE_CLASSES = 'group/submenu relative flex items-center justify-start w-full transition-all';
const SUBMENU_TEXT_CLASSES = 'text-lg font-medium';

function Submenu({ submenu, isActive, onLinkClick }) {
  return (
    <div className={SUBMENU_CONTAINER_CLASSES}>
      {submenu.map((subItem) => {
        const subActive = isActive(subItem.path);
        const linkClasses = subActive
          ? `${SUBMENU_LINK_BASE_CLASSES} text-accent-primary`
          : `${SUBMENU_LINK_BASE_CLASSES} text-text-primary hover:text-accent-primary`;

        return (
          <Link
            key={subItem.path}
            to={subItem.path}
            className={linkClasses}
            onClick={(e) => onLinkClick && onLinkClick(e, subItem.path)}
          >
            <span className={SUBMENU_TEXT_CLASSES}>{subItem.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default Submenu;
