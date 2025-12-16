import PageHeader from '../Components/PageHeader/PageHeader';
import Pagination from '../Components/Pagination/Pagination';
import { getEarners } from '../api/earners.js';
import { usePagination } from '../hooks/usePagination.js';

function Earners() {
  const {
    data: earners,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getEarners, 10);

  const formatMoney = (earner) => {
    const money = earner.wallet || 0;

    if (!money && money !== 0) return '£0';
    const numMoney = Number(money);
    if (isNaN(numMoney)) return '£0';
    return `£${numMoney.toLocaleString('en-US')}`;
  };

  if (loading) {
    return (
      <div>
        <PageHeader title="Earners" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Earners" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Earners" onSearchChange={handleSearchChange} searchValue={searchValue} />

      {earners.length === 0 ? (
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">No earners found</p>
        </div>
      ) : (
        <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
          <div className="flex items-center max-xl:gap-[15px] px-[20px] xl:mb-[30px] xl:py-[25px] mt-[10px] xl:mt-0 xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
            <p className="">Position</p>
            <p className="xl:min-w-[300px] min-w-[210px]">Player</p>
            <p className="xl:max-w-[340px]">Total</p>
          </div>

          <ul className="grid xl:gap-[35px] rounded-[15px] gap-[14px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:bg-background-block shadow-neon">
            {earners.map((earner, index) => {
              const position = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <li
                  key={earner.SteamID || earner.steamid || `earner-${index}`}
                  className="flex items-center max-xl:gap-[15px] ml-[6px] border-primary border-b pb-[14px] xl:pb-[35px] *:w-full xl:*:text-[18px] *:text-[14px] last:border-b-0"
                >
                  <p className="flex items-center gap-[17px]">
                    {position}
                    {position === 1 && (
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
                    {earner.rpname || 'Unknown'}
                  </p>
                  <p className="xl:max-w-[340px]">{formatMoney(earner)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

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

export default Earners;
