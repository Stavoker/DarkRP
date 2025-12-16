import PageHeader from '../Components/PageHeader/PageHeader';
import Pagination from '../Components/Pagination/Pagination';
import { getBans } from '../api/bans.js';
import { usePagination } from '../hooks/usePagination.js';
import { formatLength, formatTimestamp } from '../utils/dateUtils.js';

function Bans() {
  const {
    data: bansList,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getBans, 10);

  if (loading) {
    return (
      <div>
        <PageHeader title="Bans" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Bans" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Bans" onSearchChange={handleSearchChange} searchValue={searchValue} />

      {bansList.length === 0 ? (
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">No bans found</p>
        </div>
      ) : (
        <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
          <ul className="grid gap-[20px] xl:gap-[30px] xl:mb-[80px] max-xl:p-[20px] max-xl:min-w-[950px] max-xl:pt-[10px]">
            {bansList.map((ban, index) => {
              return (
                <li
                  key={ban.bid || ban.ban_id || ban.id || `ban-${index}`}
                  className="relative bg-background-block xl:p-[25px] p-[20px] rounded-r-[15px] shadow-neon"
                >
                  <span className="block w-[6px] h-full bg-background-cheating absolute top-0 left-0 rounded-l-[6px]"></span>
                  <div className="flex *:w-full *:grid *:gap-[22px] *:items-start max-xl:gap-[40px]">
                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Time</p>
                      <p>{formatTimestamp(ban.Time)}</p>
                    </div>
                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Player</p>
                      <p className="flex items-center gap-[10px]">
                        <img
                          src="/img/icons/avatar.svg"
                          alt="Avatar"
                          className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                        />
                        {ban.player_name || 'Unknown'}
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
                        {ban.admin_name || 'Unknown'}
                      </p>
                    </div>
                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Length</p>
                      <p>{formatLength(ban.Length)}</p>
                    </div>

                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Reason</p>
                      <p className="flex items-center flex-start gap-[10px] text-text-cheating">
                        <img
                          src="/img/icons/cheating.svg"
                          alt="Cheating"
                          className="w-[15px] h-[15px] xl:w-[17px] xl:h-[17px]"
                        />
                        {ban.Reason || 'No reason'}
                      </p>
                    </div>
                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Status</p>
                      <p className="flex items-center gap-[10px]">
                        {ban.status || (ban.unbanned ? 'Unbanned' : 'Banned')}{' '}
                        <span
                          className="dot-element w-[10px] h-[10px] rounded-full"
                          style={{
                            backgroundColor: ban.status === 'Banned' ? '#ff0707' : '#2ba071',
                            boxShadow:
                              ban.status === 'Banned'
                                ? '0px 0px 4px 4px rgba(255,7,7,0.15)'
                                : '0px 0px 4px 4px rgba(43, 160, 113, 0.15)',
                          }}
                        ></span>
                      </p>
                    </div>
                    <div className="max-xl:w-auto">
                      <p className="text-[14px] xl:text-[22px] font-medium">Unban Reason</p>
                      <p className={ban.UnbanReason ? '' : 'opacity-0'}>{ban.UnbanReason || 'None'}</p>
                    </div>
                  </div>
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

export default Bans;
