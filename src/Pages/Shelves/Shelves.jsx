import { Link } from 'react-router-dom';
import ShelveCard from './ShelveCard';

function Shelves() {
  return (
    <div>
      <p className="flex items-center gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:p-[20px]">
        Shelves
      </p>

      <div className="flex flex-col xl:flex-row xl:gap-[40px] gap-[15px] max-xl:pb-[45px]">
        <aside className="flex xl:flex-col flex-row gap-[48px] xl:w-[200px] shrink-0 xl:ml-[35px] xl:mt-[50px] order-1 xl:order-1 max-xl:px-[20px]">
          <div className="flex flex-col xl:gap-[22px] gap-[10px]">
            <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium"> Popular shelves</h3>

            <p className="flex items-center gap-[8px] text-accent-primary font-medium text-[16px] hover:opacity-80">
              <svg className="w-[22px] h-[18px] fill-accent-primary">
                <use href="/img/sprite.svg#darkRP"></use>
              </svg>
              DarkRP
            </p>
          </div>

          <div className="flex flex-col xl:gap-[22px] gap-[10px]">
            <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium"> New shelves</h3>

            <p className="flex items-center gap-[8px] text-accent-primary font-medium text-[16px] hover:opacity-80">
              <svg className="w-[22px] h-[18px] fill-accent-primary">
                <use href="/img/sprite.svg#darkRP"></use>
              </svg>
              DarkRP
            </p>
          </div>
        </aside>

        <div className="flex flex-wrap xl:gap-[50px] gap-[25px] w-full max-w-[1060px] order-3 xl:order-2 max-xl:px-[20px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <Link key={index} to="/shelves/darkrp" className="cursor-pointer ">
              <ShelveCard
                title="DarkRP"
                icon="/img/icons/darkRP.svg"
                backgroundImage="/img/shelves/bg_card_DarkRP.png"
                createdDate="Created 1 year ago"
                updatedDate="Updated 1 year ago"
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col xl:items-end xl:text-right space-y-[5px] xl:min-w-[250px] xl:mb-[24px] xl:mt-[50px] order-2 xl:order-3 max-xl:px-[20px]">
          <p className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[29px] mb-[10px]">Filters</p>

          <div className="max-xl:flex max-xl:flex-row max-xl:justify-between max-xl:items-center max-xl:gap-[10px] space-y-[5px]">
            <p className="text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[10px]">The default</p>
            <p className="text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[10px]">By name</p>
            <p className="text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[10px]">By creation date</p>
            <p className="text-accent-primary xl:text-[22px] text-[16px] font-medium mb-[10px]">By update date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shelves;
