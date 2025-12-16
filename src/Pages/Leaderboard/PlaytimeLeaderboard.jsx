import PageHeader from '../../Components/PageHeader/PageHeader';
import Pagination from '../../Components/Pagination/Pagination';
import { getPlaytimeLeaderboard } from '../../api/leaderboard.js';
import { usePagination } from '../../hooks/usePagination.js';
import { formatTimestamp } from '../../utils/dateUtils.js';

function PlaytimeLeaderboard() {
  const {
    data: players,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getPlaytimeLeaderboard, 10);

  const formatPlaytime = (minutes) => {
    if (!minutes && minutes !== 0) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (days > 0) {
      return `${days}d ${remainingHours}h ${mins}m`;
    }
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  if (loading) {
    return (
      <div>
        <PageHeader title="Playtime" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Playtime" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Playtime" text="Leaderboard" onSearchChange={handleSearchChange} searchValue={searchValue} />

      <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
        <div className="flex items-center max-xl:gap-[15px] px-[20px] xl:mb-[30px]  xl:py-[25px] xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
          <p className="">Position</p>
          <p className="xl:min-w-[300px] min-w-[210px]">Player</p>
          <p className="">Time Played</p>
          <p className="">First Join</p>
        </div>

        <ul className="grid xl:gap-[35px] gap-[14px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:bg-background-block shadow-neon">
          {players.length === 0 ? (
            <li className="flex justify-center items-center py-[50px]">
              <p className="text-text-secondary text-xl">No players found</p>
            </li>
          ) : (
            players.map((player, index) => {
              const position = (currentPage - 1) * itemsPerPage + index + 1;
              return (
                <li
                  key={player.SteamID || `player-${index}`}
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
                    {player.SteamName || 'Unknown'}
                  </p>
                  <p className="">{formatPlaytime(player.TimePlayed || 0)}</p>
                  <p className="">{formatTimestamp(player.FirstJoined || 0)}</p>
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

export default PlaytimeLeaderboard;
