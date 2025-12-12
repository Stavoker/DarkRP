import { useState } from 'react';
import Pagination from '../Components/Pagination/Pagination';

function Profile() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = Array.from({ length: totalItems }).slice(startIndex, endIndex);

  return (
    <div className="flex flex-col xl:gap-[40px] h-full xl:pb-[40px] xl:max-h-[1014px] xl:flex-row">
      <div className="relative w-full xl:w-1/2 xl:shadow-neon  xl:p-[35px] p-[20px] pt-[69px] xl:pt-[120px] bg-background-block">
        <div className="absolute top-0 left-0 w-full h-[115px] xl:h-[200px] xl:rounded-t-[15px] bg-[url(/img/bg-profile-mobile.png)] max-xl:bg-size-[100%_auto] xl:bg-[url(/img/bg-profile.png)] xl:bg-size-cover bg-no-repeat bg-top"></div>
        <div className="w-full h-full">
          <div className="grid items-center justify-center mb-[24px]">
            <img
              src="/img/icons/avatar.svg"
              alt="Avatar"
              className="relative z-10 w-[100px] h-[100px] xl:w-[160px] xl:h-[160px] rounded-full"
            />
            <p className="text-text-primary text-center text-[22px] xl:text-[34px]">Ayanami rei</p>
            <p className="text-text-primary text-center text-[18px] xl:text-[22px]">admin</p>
          </div>

          <div className="flex flex-wrap xl:flex-row items-stretch xl:items-center justify-between xl:gap-0 mb-[25px] xl:mb-[35px]">
            <button
              type="button"
              className="flex items-center justify-center gap-[8px] text-accent-primary text-[18px] cursor-pointer"
            >
              <img src="/img/icons/link.svg" alt="Steam" className="w-[15px] h-[15px] " /> Steam Profile
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-[8px] text-accent-primary text-[18px] cursor-pointer"
            >
              <img src="/img/icons/copy.svg" alt="Steam" className="w-[15px] h-[15px] " /> Copy SteamID32
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-[8px] text-accent-primary text-[18px] cursor-pointer xl:w-auto w-full"
            >
              <img src="/img/icons/copy.svg" alt="Steam" className="w-[15px] h-[15px] " /> Copy SteamID45
            </button>
          </div>
          <p className="text-text-primary text-[20px] xl:text-[30px] font-medium mb-[20px] xl:mb-[30px]">Stats</p>

          <ul className="grid gap-[14px] xl:gap-[19px] overflow-y-auto xl:max-h-[390px]">
            <li className="flex items-center justify-between pb-[20px] border-b border-border-primary">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">TimePlayed</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">1yr 3mos 1w 3d</p>
            </li>

            <li className="flex items-center justify-between pb-[20px] border-b border-border-primary">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">FirstJoined</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">2018-06-06 09:58:46</p>
            </li>

            <li className="flex items-center justify-between pb-[20px] border-b border-border-primary">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">SteamID</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">STEAM_0:0:64842235</p>
            </li>

            <li className="flex items-center justify-between pb-[20px] border-b border-border-primary">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">Rank</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">Admin</p>
            </li>

            <li className="flex items-center justify-between pb-[20px] border-b border-border-primary">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">Gang</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">(1)</p>
            </li>

            <li className="flex items-center justify-between pb-[20px]">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">TotalBans</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full text-left">10</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:shadow-neon xl:rounded-[15px] xl:p-[35px] p-[20px] xl:bg-background-block xl:max-h-[1014px] xl:w-1/2">
        <div className="w-full h-full">
          <p className="text-text-primary xl:text-[30px] text-[20px] font-medium mb-[5px]">Stats</p>
          <p className="text-text-primary xl:text-[24px] text-[18px] xl:mb-[40px] mb-[20px]">
            A list of this users recent bans
          </p>

          <div className="max-xl:overflow-x-auto">
            <div className="flex gap-0 flex-row pb-[20px] mb-[20px] border-b border-border-primary max-xl:min-w-[505px]">
              <p className="text-[14px] xl:text-[18px] font-medium w-full">Date</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full">Admin</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">Length</p>
              <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">Reason</p>
            </div>

            <ul className="grid gap-[20px] xl:overflow-y-auto xl:max-h-[670px] xl:-mr-[25px] xl:pb-[22px] max-xl:min-w-[505px]">
              {Array.from({ length: 100 }).map((_, index) => (
                <li
                  key={index}
                  className="hidden xl:flex gap-0 flex-row items-center justify-between pb-[20px] border-b border-border-primary last:border-b-0"
                >
                  <p className="text-[14px] xl:text-[18px] font-medium w-full">2024-06-25 18:33:49</p>
                  <p className="text-[14px] xl:text-[18px] font-medium w-full">STEAM_0:1:60621306</p>
                  <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">14 days</p>
                  <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">Exploiting</p>
                </li>
              ))}

              {displayedItems.map((_, index) => {
                const actualIndex = startIndex + index;
                return (
                  <li
                    key={actualIndex}
                    className="flex xl:hidden gap-0 flex-row items-center justify-between pb-[20px] border-b border-border-primary last:border-b-0"
                  >
                    <p className="text-[14px] xl:text-[18px] font-medium w-full">2024-06-25 18:33:49</p>
                    <p className="text-[14px] xl:text-[18px] font-medium w-full">STEAM_0:1:60621306</p>
                    <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">14 days</p>
                    <p className="text-[14px] xl:text-[18px] font-medium w-full max-w-[100px]">Exploiting</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="xl:hidden mt-[20px]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
