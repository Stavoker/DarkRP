import { Link } from 'react-router-dom';

function ShelveBreadcrumbs({ id, infoShelves, infoActivity, onInfoShelvesClick, onInfoActivityClick, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-[8px] text-accent-primary text-[16px] xl:h-[25px] ${className}`}>
      <Link
        to="/shelves"
        className="flex items-center gap-[8px] group transition-color duration-300 hover:text-[#40A6EE]"
      >
        <svg className="w-[16px] h-[16px]  stroke-accent-primary group-hover:group-hover:stroke-[#40A6EE] transition-fill duration-300">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        Shelves
      </Link>
      <svg className="w-[16px] h-[16px] fill-[#9595954d]">
        <use href="/img/sprite.svg#arrow"></use>
      </svg>
      <span className="flex items-center gap-[8px]">
        <svg className="w-[16px] h-[16px]  stroke-accent-primary">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        {id}
      </span>

      {infoShelves && (
        <div
          onClick={onInfoShelvesClick}
          className="cursor-pointer  flex items-center gap-[8px] text-[#40A6EE] hover:text-text-primary group-hover:fill-text-primary transition-color duration-300"
        >
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <span className="flex items-center gap-[8px] group transition-color duration-300 hover:text-text-primary">
            <svg className="w-[16px] h-[16px] transition-fill duration-300 fill-[#40A6EE] group-hover:fill-text-primary">
              <use href="/img/sprite.svg#flag"></use>
            </svg>
            {infoShelves}
          </span>
        </div>
      )}

      {infoActivity && (
        <div onClick={onInfoActivityClick} className="cursor-pointer  flex items-center gap-[8px]">
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <span className="flex items-center gap-[8px] group transition-color duration-300 hover:text-[#40A6EE] hover:fill-[#40A6EE]">
            <svg className="w-[16px] h-[16px] fill-accent-primary transition-fill duration-300 group-hover:fill-[#40A6EE]">
              <use href="/img/sprite.svg#flag"></use>
            </svg>
            {infoActivity.title}
          </span>
        </div>
      )}
    </div>
  );
}

export default ShelveBreadcrumbs;
