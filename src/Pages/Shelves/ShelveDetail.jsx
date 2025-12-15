import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShelveBreadcrumbs from './ShelveBreadcrumbs';
import ShelveCard from './ShelveCard';
import ShelvesDetailActivity from './ShelvesDetailActivity';
import ShelvesDetailDetails from './ShelvesDetailDetails';
import ShelvesDetailInfo from './ShelvesDetailInfo';

function ShelveDetail() {
  const [selectedFilter, setSelectedFilter] = useState('default');
  const { shelfId, bookId, pageId } = useParams();
  const navigate = useNavigate();

  const books = [
    { id: 'support-hub', title: 'Support Hub' },
    { id: 'administration-staff', title: 'Administration and Staff' },
    { id: 'basing', title: 'Basing' },
    { id: 'crafting-consumables', title: 'Crafting & Consumables' },
    { id: 'roleplay', title: 'Roleplay' },
    { id: 'weapons-sweps', title: 'Weapons and SWEPs' },
    { id: 'civil-protection', title: 'Civil Protection' },
    { id: 'gangs', title: 'Gangs' },
  ];

  const activityList = [
    {
      id: 'how-sits-work',
      title: 'How Sits Work',
      text: (
        <p className="text-text-secondary xl:text-[18px] text-[14px]">
          Here on Cloud Gaming, if you make a report or are reported you are taken to the 'Sit Area'.
        </p>
      ),
      description: (
        <p className="text-text-secondary xl:text-[18px] text-[14px]  mt-[10px]">
          We primarily use logs and both the Reportee and the Reported users' stories in order to gather a verdict.
          However in some cases, stories may not match up. This is why we sometimes ask for proof of the situation from
          the Reportee. This can be in the form of screenshots or a video showing what happened.
        </p>
      ),
    },
    {
      id: 'rules',
      title: 'Rules',
      path: '/rules/rules',
      description: '',
      text: '',
    },
    {
      id: 'join-staff-team',
      title: 'Want to join the Staff Team?',
      text: (
        <p className="text-text-secondary xl:text-[18px] text-[14px]">
          There's two ways to apply for Staff on the server. You can either apply on the{' '}
          <Link className="text-accent-primary underline" to="/forums">
            Forums
          </Link>{' '}
          or{' '}
          <Link className="text-accent-primary underline" to="/discord">
            Discord
          </Link>
          !
        </p>
      ),
    },
  ];

  const currentBook = books.find((book) => book.id === bookId);
  const currentPage = activityList.find((page) => page.id === pageId);

  const handleBookClick = (bookId) => {
    navigate(`/shelves/${shelfId}/${bookId}`);
  };

  const handlePageClick = (pageId) => {
    navigate(`/shelves/${shelfId}/${bookId}/${pageId}`);
  };

  return (
    <div>
      <p className="flex items-center gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:p-[20px]">
        Shelves
      </p>

      {/* Breadcrumbs for mobile version */}
      <div className="max-xl:block xl:hidden max-xl:px-[20px] mb-[10px]">
        <ShelveBreadcrumbs
          shelfId={shelfId}
          bookId={bookId}
          pageId={pageId}
          currentBook={currentBook}
          currentPage={currentPage}
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-[40px] gap-[15px] max-xl:pb-[45px]">
        <aside className="flex flex-col xl:gap-[50px] gap-[25px] xl:w-[240px] shrink-0 xl:ml-[35px] xl:mt-[50px] order-1 xl:order-1 max-xl:px-[20px] xl:sticky xl:top-[120px] xl:self-start xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto xl:pr-[10px] scrollbar-hide">
          {!pageId && (
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
                      <span className="text-accent-primary underline">Noseian</span> updated the {shelfId}
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
                      <span className="text-accent-primary underline ">{shelfId}</span> shelf
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

          {bookId && bookId.includes('administration-staff') && (
            <div className="xl:mb-[40px] mb-[20px] order-4">
              <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[10px] mb-[8px]">
                Navigating the Book
              </h3>
              <nav className="flex flex-col gap-[10px]">
                <Link
                  to={`/shelves/${shelfId}/${bookId}`}
                  className={`text-[16px] text-left transition-colors xl:border-l-4 border-l-2 pl-[2px] ${
                    !pageId
                      ? 'text-[#40A6EE] border-[#40A6EE]'
                      : 'text-accent-primary border-accent-primary hover:text-text-primary hover:border-accent-primary'
                  }`}
                >
                  {currentBook?.title || bookId}
                </Link>

                {activityList.map((page) => {
                  const isActive = pageId === page.id;
                  return (
                    <Link
                      key={page.id}
                      to={`${page.path ? page.path : `/shelves/${shelfId}/${bookId}/${page.id}`}`}
                      className={`text-[16px] text-left transition-colors xl:border-l-4 border-l-2 pl-[2px] ${
                        isActive
                          ? 'text-[#40A6EE] border-[#40A6EE]'
                          : 'text-accent-primary border-accent-primary hover:text-text-primary hover:border-accent-primary'
                      }`}
                    >
                      {page.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </aside>

        <div className="flex flex-col w-full max-w-[1060px] order-3 xl:order-2 max-xl:px-[20px]">
          {/* Breadcrumbs for desktop version */}
          <div className="hidden xl:block mb-[10px]">
            <ShelveBreadcrumbs
              shelfId={shelfId}
              bookId={bookId}
              pageId={pageId}
              currentBook={currentBook}
              currentPage={currentPage}
            />
          </div>

          {!bookId && (
            <div className="flex flex-wrap xl:gap-[50px] gap-[25px]">
              {books.map((book) => (
                <ShelveCard
                  key={book.id}
                  title={book.title}
                  icon="/img/icons/flag.svg"
                  backgroundImage="/img/shelves/error.png"
                  onClick={() => handleBookClick(book.id)}
                />
              ))}
            </div>
          )}

          {bookId && !pageId && (
            <ShelvesDetailInfo
              infoShelves={currentBook?.title || bookId}
              onInfoActivityClick={(activity) => handlePageClick(activity.id)}
              activityList={activityList}
            />
          )}

          {pageId && currentPage && <ShelvesDetailActivity infoActivity={currentPage} />}
        </div>

        <div className="flex flex-col xl:items-end xl:text-right space-y-[5px] xl:min-w-[250px] xl:mb-[24px] xl:mt-[50px] order-2 xl:order-3 max-xl:px-[20px] xl:sticky xl:top-[120px] xl:self-start xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto">
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
