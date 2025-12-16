import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth.js';

const Header = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, login, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <header className="absolute z-10 top-0 left-0 right-0 bg-[#0D1322] xl:bg-background-main max-xl:shadow-neon">
      <div className="flex items-center justify-between gap-[10px] px-[20px] py-[5px] xl:justify-end xl:px-[50px] xl:pt-[40px] xl:pb-[10px]">
        <button
          onClick={onMenuClick}
          className="flex items-center justify-center w-[40px] h-[40px] xl:hidden"
          aria-label="Toggle menu"
        >
          <img src="/img/icons/menu.svg" alt="Menu" className="w-[24px] h-[24px]" />
        </button>

        <div className="relative">
          {loading ? (
            <div className="flex items-center gap-[10px] text-text-primary xl:text-[22px] text-[16px] font-light">
              Loading...
            </div>
          ) : user ? (
            <>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer p-2 items-center gap-[10px] text-text-primary xl:text-[22px] text-[16px] font-light"
              >
                {user.name || 'User'}
                <img
                  src={user.avatar || '/img/icons/avatar.svg'}
                  alt="Avatar"
                  className="w-[40px] h-[40px] rounded-full xl:w-[30px] xl:h-[30px]"
                />
              </button>
              {isOpen && (
                <div className="cursor-pointer grid gap-[20px] absolute top-[50px] right-0 p-[15px] w-[184px] rounded-[6px] h-[104px] shadow-neon bg-[linear-gradient(180deg,#0F182C_0%,#1D293D_100%)]">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.open(`https://steamcommunity.com/profiles/${user.steamId64}/`, '_blank');
                    }}
                    className="flex items-center gap-[10px] text-[22px] font-light"
                  >
                    <img src="/img/icons/profile.svg" alt="Profile" className="w-[12px] h-[14px]" /> Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer text-text-cheating gap-[10px] xl:text-[22px] text-[16px] font-light"
                  >
                    <img src="/img/icons/exit.svg" alt="Exit" className="w-[14px] h-[14px]" /> Exit
                  </button>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={login}
              className="flex cursor-pointer p-2 items-center gap-[10px] text-text-primary xl:text-[22px] text-[16px] hover:opacity-80 transition-opacity bg-accent-primary font-medium rounded-[6px] px-[20px] py-[5px] uppercase"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
