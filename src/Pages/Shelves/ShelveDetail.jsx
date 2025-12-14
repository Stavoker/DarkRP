import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShelveBreadcrumbs from './ShelveBreadcrumbs';
import ShelveCard from './ShelveCard';
import ShelvesDetailActivity from './ShelvesDetailActivity';
import ShelvesDetailDetails from './ShelvesDetailDetails';
import ShelvesDetailInfo from './ShelvesDetailInfo';

function ShelveDetail() {
  const [infoShelves, setInfoShelves] = useState('');
  const [infoActivity, setInfoActivity] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('default');
  const { id } = useParams();

  const activityList = [
    {
      id: 1,
      title: 'How Sits Work',
      description:
        'Here on Cloud Gaming, if you make a report or are reported you are taken to the "Sit Area". We p...',
    },

    {
      id: 2,
      title: 'Want to join the Staff Team?',
      description: "There's two ways to apply for Staff on the server. You can either apply on the Forums or Discord!",
    },
    {
      id: 3,
      title: 'Rules',
      description:
        'The rules are made to improve players experiences. Use common sense and do not try to loop hole t...',
    },
    {
      id: 4,
      title: 'Staff Roles',
      description:
        'On Cloud Gaming, we have 4 levels of Staff on the server. The first 3 levels deal with reports in...',
    },
  ];

  return (
    <div>
      <p className="flex items-center gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:p-[20px]">
        Shelves
      </p>

      {/* Breadcrumbs для мобильной версии */}
      <div className="max-xl:block xl:hidden max-xl:px-[20px] mb-[10px]">
        <ShelveBreadcrumbs
          id={id}
          infoShelves={infoShelves}
          infoActivity={infoActivity}
          onInfoShelvesClick={() => setInfoShelves('')}
          onInfoActivityClick={() => setInfoActivity(null)}
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-[40px] gap-[15px] max-xl:pb-[45px]">
        <aside className="flex flex-col xl:gap-[50px] gap-[25px] xl:w-[240px] shrink-0 xl:ml-[35px] xl:mt-[50px] order-1 xl:order-1 max-xl:px-[20px]">
          {!infoActivity && (
            <>
              <ShelvesDetailDetails createdAt="1 year ago" updatedAt="1 year ago" />
              <div className="flex flex-col">
                <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium mb-[20px]">
                  Recent Activity
                </h3>

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
            </>
          )}

          {infoActivity && (
            <div className="xl:mb-[40px] mb-[20px] order-4">
              <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[10px] mb-[8px]">
                Navigating the Book
              </h3>
              <nav className="flex flex-col gap-[10px]">
                <button className="text-[16px] text-left transition-colors xl:border-l-4 border-l-2 pl-[2px] text-[#40A6EE] border-[#40A6EE]">
                  {infoShelves}
                </button>

                {activityList.map((page) => {
                  const isActive = infoActivity && infoActivity.id === page.id;
                  return (
                    <button
                      key={page.id}
                      className={`text-[16px] text-left transition-colors xl:border-l-4 border-l-2 pl-[2px] ${
                        page.page === page.id
                          ? 'text-[#40A6EE] border-[#40A6EE]'
                          : 'text-accent-primary border-accent-primary hover:text-text-primary hover:border-accent-primary'
                      }
                    ${isActive ? 'text-text-primary border-accent-primary' : ''}`}
                      onClick={() => setInfoActivity(page)}
                    >
                      {page.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </aside>

        <div className="flex flex-col w-full max-w-[1060px] order-3 xl:order-2 max-xl:px-[20px]">
          {/* Breadcrumbs для десктопной версии */}
          <div className="hidden xl:block mb-[10px]">
            <ShelveBreadcrumbs
              id={id}
              infoShelves={infoShelves}
              infoActivity={infoActivity}
              onInfoShelvesClick={() => setInfoShelves('')}
              onInfoActivityClick={() => setInfoActivity(null)}
            />
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

          {infoShelves && !infoActivity && (
            <ShelvesDetailInfo
              infoShelves={infoShelves}
              onInfoActivityClick={(activity) => setInfoActivity(activity)}
              activityList={activityList}
            />
          )}

          {infoActivity && <ShelvesDetailActivity infoActivity={infoActivity} />}
        </div>

        <div className="flex flex-col xl:items-end xl:text-right space-y-[5px] xl:min-w-[250px] xl:mb-[24px] xl:mt-[50px] order-2 xl:order-3 max-xl:px-[20px]">
          <p className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[29px] mb-[10px]">Filters</p>

          <div className="max-xl:grid max-xl:grid-cols-2 max-xl:gap-[10px] max-xl:justify-items-center space-y-[5px]">
            <button
              onClick={() => setSelectedFilter('default')}
              className={`block w-full text-center max-xl:text-center xl:text-right cursor-pointer xl:text-[22px] text-[16px] font-medium xl:mb-[10px] transition-colors duration-300 ${
                selectedFilter === 'default' ? 'text-text-primary' : 'text-accent-primary hover:text-text-primary'
              }`}
            >
              The default
            </button>

            <button
              onClick={() => setSelectedFilter('name')}
              className={`block w-full text-center max-xl:text-center xl:text-right cursor-pointer xl:text-[22px] text-[16px] font-medium xl:mb-[10px] transition-colors duration-300 ${
                selectedFilter === 'name' ? 'text-text-primary' : 'text-accent-primary hover:text-text-primary'
              }`}
            >
              By name
            </button>

            <button
              onClick={() => setSelectedFilter('creation-date')}
              className={`block w-full text-center max-xl:text-center xl:text-right cursor-pointer xl:text-[22px] text-[16px] font-medium xl:mb-[10px] transition-colors duration-300 ${
                selectedFilter === 'creation-date' ? 'text-text-primary' : 'text-accent-primary hover:text-text-primary'
              }`}
            >
              By creation date
            </button>

            <button
              onClick={() => setSelectedFilter('update-date')}
              className={`block w-full text-center max-xl:text-center xl:text-right cursor-pointer xl:text-[22px] text-[16px] font-medium xl:mb-[10px] transition-colors duration-300 ${
                selectedFilter === 'update-date' ? 'text-text-primary' : 'text-accent-primary hover:text-text-primary'
              }`}
            >
              By update date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelveDetail;
