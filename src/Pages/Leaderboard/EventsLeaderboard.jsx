import { useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Pagination from '../../Components/Pagination/Pagination';

function EventsLeaderboard() {
  const [currentPage, setCurrentPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const totalItems = 133165;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Здесь можно добавить логику загрузки данных для новой страницы
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    // Здесь можно добавить логику фильтрации данных
  };

  return (
    <div>
      <PageHeader title="Events" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />

      <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
        <div className="flex items-center max-xl:gap-[15px] px-[20px] xl:mb-[30px] xl:py-[25px] xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
          <p className="">Position</p>
          <p className="xl:min-w-[300px] min-w-[210px]">Player</p>
          <p className="">Wins</p>
          <p className="">Total</p>
        </div>

        <ul className="grid xl:gap-[35px] gap-[14px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:pr-[103px] xl:bg-background-block shadow-neon">
          {Array.from({ length: 10 }).map((_, index) => (
            <li
              key={index}
              className="flex items-center max-xl:gap-[15px] ml-[6px] border-primary border-b pb-[14px] xl:pb-[35px] *:w-full xl:*:text-[18px] *:text-[14px] last:border-b-0"
            >
              <p className="flex items-center gap-[17px]">
                {index + 1}{' '}
                {index + 1 === 1 && (
                  <svg className="w-[20px] h-[11px] xl:w-[32px] xl:h-[20px] fill-gold stroke-gold">
                    <use href="/img/sprite.svg#leaderboard"></use>
                  </svg>
                )}
              </p>
              <p className="flex items-center gap-[10px] xl:min-w-[300px] min-w-[210px]">
                <img
                  src="/img/icons/avatar.svg"
                  alt="Avatar"
                  className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                />
                RedMoreBlue
              </p>
              <p className="">262</p>
              <p className="">10012394</p>
            </li>
          ))}
        </ul>
      </div>

      <Pagination
        infoPagination={window.innerWidth >= 768}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default EventsLeaderboard;
