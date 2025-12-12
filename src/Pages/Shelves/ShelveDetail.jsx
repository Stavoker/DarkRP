import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShelveCard from './ShelveCard';
import ShelvesDetailInfo from './ShelvesDetailInfo';

function Breadcrumbs({ id, infoShelves, onInfoShelvesClick, className = '' }) {
  return (
    <div className={`flex items-center gap-[8px] text-accent-primary text-[16px] h-[25px] ${className}`}>
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
        <div onClick={onInfoShelvesClick} className="cursor-pointer  flex items-center gap-[8px]">
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <span className="flex items-center gap-[8px] group transition-color duration-300 hover:text-[#40A6EE] hover:fill-[#40A6EE]">
            <svg className="w-[16px] h-[16px] fill-accent-primary transition-fill duration-300 group-hover:fill-[#40A6EE]">
              <use href="/img/sprite.svg#flag"></use>
            </svg>
            {infoShelves}
          </span>
        </div>
      )}
    </div>
  );
}

function ShelveDetail() {
  const [infoShelves, setInfoShelves] = useState('');
  const { id } = useParams();

  return (
    <div>
      <p className="flex items-center gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:p-[20px]">
        Shelves
      </p>

      {/* Breadcrumbs для мобильной версии */}
      <div className="max-xl:block xl:hidden max-xl:px-[20px] mb-[10px]">
        <Breadcrumbs id={id} infoShelves={infoShelves} onInfoShelvesClick={() => setInfoShelves('')} />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-[40px] gap-[15px] max-xl:pb-[45px]">
        <aside className="flex flex-col xl:gap-[50px] gap-[25px] xl:w-[240px] shrink-0 xl:ml-[35px] xl:mt-[50px] order-1 xl:order-1 max-xl:px-[20px]">
          <div className="flex flex-col ">
            <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[20px] mb-[15px]">
              Details
            </h3>

            <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
              <img src="/img/icons/clock.svg" alt="Clock" className="w-auto h-auto" />
              Created 1 year ago
            </p>
            <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
              <img src="/img/icons/pen.svg" alt="Pencil" className="w-auto h-auto" />
              Updated 1 year ago
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium mb-[20px]">Recent Activity</h3>

            <div className="flex items-start xl:items-center gap-[10px] xl:mb-[17px] mb-[10px]">
              <img
                src="/img/icons/avatar.svg"
                alt="Avatar"
                className="w-[35px] h-[35px] max-xl:w-[25px] max-xl:h-[25px]"
              />

              <div>
                <p className="flex gap-[3px] items-center font-light text-[14px]  hover:opacity-80">
                  <span className="text-accent-primary underline">Noseian</span> updated the DarkRP
                  <span className="text-accent-primary underline ">shelf</span>
                </p>
                <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
                  <img src="/img/icons/clock.svg" alt="Clock" className="w-auto h-auto" />
                  Created 1 year ago
                </p>
              </div>
            </div>

            <div className="flex items-start xl:items-center gap-[10px] xl:mb-[17px] mb-[10px] ">
              <img
                src="/img/icons/avatar.svg"
                alt="Avatar"
                className="w-[35px] h-[35px] max-xl:w-[25px] max-xl:h-[25px]"
              />

              <div>
                <p className="flex gap-[3px] items-center font-light text-[14px]  hover:opacity-80">
                  <span className="text-accent-primary underline">Wilton</span> created the
                  <span className="text-accent-primary underline ">DarkRP</span> shelf
                </p>
                <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
                  <img src="/img/icons/clock.svg" alt="Clock" className="w-auto h-auto" />
                  Created 1 year ago
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col w-full max-w-[1060px] order-3 xl:order-2 max-xl:px-[20px]">
          {/* Breadcrumbs для десктопной версии */}
          <div className="hidden xl:block mb-[10px]">
            <Breadcrumbs id={id} infoShelves={infoShelves} onInfoShelvesClick={() => setInfoShelves('')} />
          </div>

          {!infoShelves && (
            <div className="flex flex-wrap xl:gap-[50px] gap-[25px]">
              {Array.from({ length: 10 }).map((_, index) => (
                <ShelveCard
                  key={index}
                  title="Support Hub"
                  icon="/img/icons/flag.svg"
                  backgroundImage="/img/shelves/error.png"
                  onClick={() => setInfoShelves('Support Hub')}
                />
              ))}
            </div>
          )}

          {infoShelves && <ShelvesDetailInfo infoShelves={infoShelves} />}
        </div>

        <div className="flex flex-col xl:items-end xl:text-right space-y-[5px] xl:min-w-[130px] xl:mb-[24px] xl:mt-[50px] order-2 xl:order-3 max-xl:px-[20px]">
          <p className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[29px] mb-[10px]">Actions</p>

          <div className="max-xl:flex max-xl:flex-row max-xl:justify-between max-xl:items-center max-xl:gap-[10px] space-y-[5px]">
            <p className="flex items-center gap-[10px] text-accent-primary xl:text-[22px] text-[16px] font-medium max-xl:mb-[10px] mb-[17px]">
              <img src="/img/icons/hamburger.svg" alt="List" className="w-[14px] h-[14px] xl:w-[24px] xl:h-[24px]" />
              List view
            </p>
            <p className="flex items-center gap-[10px] text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[17px]">
              <img src="/img/icons/tag.svg" alt="Tags" className="w-[14px] h-[14px] xl:w-[24px] xl:h-[24px]" /> View
              tags
            </p>
            <p className="flex items-center gap-[10px] text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[17px]">
              <img src="/img/icons/filter.svg" alt="Sort" className="w-[14px] h-[14px] xl:w-[24px] xl:h-[24px]" /> Sort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelveDetail;
