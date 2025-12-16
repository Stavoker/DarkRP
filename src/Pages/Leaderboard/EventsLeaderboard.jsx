import PageHeader from '../../Components/PageHeader/PageHeader';
import Pagination from '../../Components/Pagination/Pagination';
import { getEventLeaderboard } from '../../api/leaderboard.js';
import { usePagination } from '../../hooks/usePagination.js';

function EventsLeaderboard() {
  const {
    data: events,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getEventLeaderboard, 10);

  if (loading) {
    return (
      <div>
        <PageHeader title="Events" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Events" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Events" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />

      <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
        <div className="flex items-center max-xl:gap-[15px] px-[20px] xl:mb-[30px]  xl:py-[25px] xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
          <p className="">Position</p>
          <p className="xl:min-w-[300px] min-w-[210px]">Player</p>
          <p className="">Wins</p>
          <p className="">Total</p>
        </div>

        <ul className="grid xl:gap-[35px] max-xl:min-w-[550px] xl:rounded-[15px] gap-[14px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:bg-background-block xl:shadow-neon">
          {events.length === 0 ? (
            <li className="flex justify-center items-center py-[50px]">
              <p className="text-text-secondary text-xl">No events found</p>
            </li>
          ) : (
            events.map((event, index) => {
              const position = (currentPage - 1) * itemsPerPage + index + 1;
              const playerName = event.name || 'Unknown';
              const wins = event.prize || 0;
              const total = event.event_id || 0;

              return (
                <li
                  key={event.steamid || event.steam_id || event.steamid64 || `event-${index}`}
                  className="flex items-center max-xl:gap-[15px] border-primary border-b pb-[14px] xl:pb-[35px] *:w-full xl:*:text-[18px] *:text-[14px] last:border-b-0"
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
                    {playerName}
                  </p>
                  <p className="">{wins}</p>
                  <p className="">{total}</p>
                </li>
              );
            })
          )}
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
