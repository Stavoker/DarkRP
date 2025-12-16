import PageHeader from '../Components/PageHeader/PageHeader';
import Pagination from '../Components/Pagination/Pagination';
import { getGangs } from '../api/gangs.js';
import { usePagination } from '../hooks/usePagination.js';

function Gangs() {
  const {
    data: gangs,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    searchValue,
    currentPage,
  } = usePagination(getGangs, 10);

  if (loading) {
    return (
      <div>
        <PageHeader title="Gangs" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-secondary text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageHeader title="Gangs" onSearchChange={handleSearchChange} searchValue={searchValue} />
        <div className="flex justify-center items-center py-[100px]">
          <p className="text-text-cheating text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Gangs" onSearchChange={handleSearchChange} searchValue={searchValue} />
      <div className="max-xl:overflow-x-auto max-xl:mb-[20px]">
        <div className="flex items-center px-[20px] max-xl:min-w-[800px] xl:mb-[30px] xl:py-[25px] xl:px-[35px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] *:w-full xl:*:text-[22px] *:text-[16px] *:font-medium">
          <p className="xl:min-w-[300px] min-w-[210px]">Gang</p>
          <p className="">Elo</p>
          <p className="text-center">Prestige</p>
          <p className="text-center">Level</p>
          <p className="text-center">Power</p>
          <p className="text-center">Credits</p>
          <p className="text-right">Members</p>
        </div>

        {gangs.length === 0 ? (
          <div className="flex justify-center items-center py-[100px] xl:bg-background-block xl:shadow-neon xl:rounded-[15px] xl:p-[35px]">
            <p className="text-text-secondary text-xl">No gangs found</p>
          </div>
        ) : (
          <ul className="grid xl:gap-[35px] gap-[14px] xl:rounded-[15px] max-xl:min-w-[800px] xl:mb-[80px] xl:p-[35px] p-[20px] xl:bg-background-block shadow-neon">
            {gangs.map((gang, index) => (
              <li
                key={gang.id || gang.name || `gang-${index}`}
                className="flex items-center last:pb-0 ml-[6px] border-primary border-b pb-[14px] xl:pb-[35px] *:w-full xl:*:text-[18px] *:text-[14px] last:border-b-0"
              >
                <p className="flex items-center gap-[10px] xl:min-w-[300px] min-w-[210px]">
                  <img
                    src="/img/icons/avatar.svg"
                    alt="Avatar"
                    className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                  />
                  {gang.name || 'Unknown Gang'}
                </p>
                <p>{gang.elo || gang.Elo || 0}</p>
                <p className="text-center font-medium">{gang.prestige || gang.Prestige || 0}</p>
                <p className="text-center font-medium">{gang.level || gang.Level || 0}</p>
                <p className="text-center font-medium">{gang.power || gang.Power || 0}</p>
                <p className="text-center font-medium">{gang.credits || gang.Credits || 0}</p>
                <p className="text-center font-medium">{gang.members || gang.Members || 0}</p>
              </li>
            ))}
          </ul>
        )}
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

export default Gangs;
