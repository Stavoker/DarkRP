import PageHeader from '../Components/PageHeader/PageHeader';
import Pagination from '../Components/Pagination/Pagination';
import { getPunishments } from '../api/punishments.js';
import { usePagination } from '../hooks/usePagination.js';
import { formatLength, formatTimestamp } from '../utils/dateUtils.js';

function Punishments() {
  const {
    data: punishments,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getPunishments, 10);

  if (loading) {
    return (
      <div>
        <PageHeader title="Punishments" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Punishments" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Punishments" onSearchChange={handleSearchChange} searchValue={searchValue} />

      {punishments.length === 0 ? (
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">No punishments found</p>
        </div>
      ) : (
        <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
          <ul className="grid gap-[20px] xl:gap-[30px] xl:mb-[80px] max-xl:p-[20px] max-xl:min-w-[950px] max-xl:pt-[10px]">
            {punishments.map((punishment, index) => (
              <li
                key={punishment.id || `punishment-${index}`}
                className="relative bg-background-block xl:p-[25px] p-[20px] rounded-r-[15px] shadow-neon"
              >
                <span className="block w-[6px] h-full bg-background-cheating absolute top-0 left-0 rounded-l-[6px]"></span>
                <div className="flex *:w-full *:grid *:gap-[22px] *:items-start max-xl:gap-[40px]">
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Time</p>
                    <p>{formatTimestamp(punishment.Time)}</p>
                  </div>
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Player</p>
                    <p className="flex items-center gap-[10px]">
                      <img
                        src="/img/icons/avatar.svg"
                        alt="Avatar"
                        className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                      />
                      {punishment.player_name || punishment.SteamID || 'Unknown'}
                    </p>
                  </div>
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Admin</p>
                    <p className="flex items-center gap-[10px]">
                      <img
                        src="/img/icons/avatar.svg"
                        alt="Avatar"
                        className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                      />
                      {punishment.admin_name || punishment.A_SteamID === 'CONSOLE'
                        ? 'CONSOLE'
                        : punishment.A_SteamID || 'Unknown'}
                    </p>
                  </div>
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Length</p>
                    <p>{formatLength(punishment.Length)}</p>
                  </div>
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Reason</p>
                    <p className="flex items-center flex-start gap-[10px] text-text-cheating">
                      <img
                        src="/img/icons/cheating.svg"
                        alt="Cheating"
                        className="w-[15px] h-[15px] xl:w-[17px] xl:h-[17px]"
                      />
                      {punishment.Reason || 'No reason'}
                    </p>
                  </div>
                  <div className="max-xl:w-auto">
                    <p className="text-[14px] xl:text-[22px] font-medium">Punishment</p>
                    <p>{punishment.Punishment || 'N/A'}</p>
                  </div>
                </div>
              </li>
            ))}
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

export default Punishments;
