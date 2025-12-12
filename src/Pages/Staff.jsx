import PageHeader from '../Components/PageHeader/PageHeader';
import Pagination from '../Components/Pagination/Pagination';
import { getStaff } from '../api/staff.js';
import { usePagination } from '../hooks/usePagination.js';
import { formatTimestamp } from '../utils/dateUtils.js';

function Staff() {
  const {
    data: staff,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getStaff, 10);

  const formatMinutes = (minutes) => {
    if (!minutes && minutes !== 0) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'N/A';
    }
  };

  if (loading) {
    return (
      <div>
        <PageHeader title="Staff" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Staff" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Staff" onSearchChange={handleSearchChange} searchValue={searchValue} />

      {staff.length === 0 ? (
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">No staff found</p>
        </div>
      ) : (
        <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
          <div className="flex items-center max-xl:gap-[15px] px-[20px] max-xl:min-w-[1260px] xl:mb-[30px] xl:py-[25px] xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
            <p className="xl:min-w-[250px] min-w-[210px]">Admin</p>
            <p className="text-center">Rank</p>
            <p className="text-left">Time (2 Week)</p>
            <p className="text-left">Time Total</p>
            <p className="text-left">Time Played</p>
            <p className="text-left">First Joined</p>
            <p className="text-left">Last OD</p>
          </div>

          <ul className="grid xl:gap-[35px] gap-[14px] max-xl:min-w-[1260px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:pr-[103px] xl:bg-background-block shadow-neon">
            {staff.map((staffMember, index) => (
              <li
                key={staffMember.SteamID || `staff-${index}`}
                className="flex items-center max-xl:gap-[15px] ml-[6px] border-primary border-b pb-[14px] xl:pb-[35px] *:w-full xl:*:text-[18px] *:text-[14px] last:border-b-0"
              >
                <p className="flex items-center gap-[10px] xl:min-w-[250px] min-w-[210px]">
                  <img
                    src="/img/icons/avatar.svg"
                    alt="Avatar"
                    className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                  />
                  {staffMember.player_name || staffMember.SteamID || 'Unknown'}
                </p>
                <p className="text-center font-medium">{staffMember.rank || staffMember.Rank || 'N/A'}</p>
                <p className="text-left font-medium">
                  {formatMinutes(staffMember.Minutes || staffMember.minutes || 0)}
                </p>
                <p className="text-left font-medium">
                  {formatMinutes(staffMember.time_played || staffMember.TimePlayed || 0)}
                </p>
                <p className="text-left font-medium">
                  {formatMinutes(staffMember.time_played || staffMember.TimePlayed || 0)}
                </p>
                <p className="text-left font-medium">
                  {formatTimestamp(staffMember.first_joined || staffMember.FirstJoined)}
                </p>
                <p className="text-left font-medium">{formatDate(staffMember.LastReward || staffMember.lastReward)}</p>
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

export default Staff;
