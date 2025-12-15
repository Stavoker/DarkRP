import { Link } from 'react-router-dom';

function Breadcrumbs({
  items = [],
  className = '',
  separatorIcon = 'arrow',
  textColor = 'text-accent-primary',
  separatorColor = 'fill-[#9595954d]',
  showHover = true,
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-[8px] ${textColor} text-[16px] xl:h-[25px] ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isLink = item.to && !isLast;
        const iconId = item.icon || 'darkRP';
        const iconType = item.iconType || 'stroke';
        const hoverClass = showHover && isLink ? 'group transition-color duration-300 hover:text-[#40A6EE]' : '';
        const itemTextColor = item.textColor || textColor;
        const itemClassName = `flex items-center gap-[8px] ${itemTextColor} ${hoverClass} ${item.className || ''}`;

        let iconClassName = '';
        if (item.iconClassName) {
          iconClassName = item.iconClassName;
        } else if (iconType === 'stroke') {
          iconClassName = 'stroke-accent-primary group-hover:stroke-[#40A6EE] transition-stroke duration-300';
        } else {
          iconClassName = 'fill-accent-primary group-hover:fill-[#40A6EE] transition-fill duration-300';
        }

        const iconElement = item.icon ? (
          <svg className={`w-[16px] h-[16px] ${iconClassName}`}>
            <use href={`/img/sprite.svg#${iconId}`}></use>
          </svg>
        ) : null;

        const content = (
          <>
            {item.icon && iconElement}
            {item.label}
          </>
        );

        return (
          <div key={index} className="flex items-center gap-[8px]">
            {isLink ? (
              <Link to={item.to} className={itemClassName}>
                {content}
              </Link>
            ) : (
              <span className={itemClassName}>{content}</span>
            )}
            {!isLast && (
              <svg className={`w-[16px] h-[16px] ${separatorColor}`}>
                <use href={`/img/sprite.svg#${separatorIcon}`}></use>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
