const Header = ({ onMenuClick }) => {
  return (
    <header className="absolute z-10 top-0 left-0 right-0 bg-[#0D1322] xl:bg-background-main max-xl:shadow-neon">
      <div className="flex items-center justify-between gap-[10px] px-[20px] pt-[50px] pb-[5px] xl:justify-end xl:px-[50px] xl:pt-[40px] xl:pb-[10px]">
        <button
          onClick={onMenuClick}
          className="flex items-center justify-center w-[40px] h-[40px] xl:hidden"
          aria-label="Toggle menu"
        >
          <img src="/img/icons/menu.svg" alt="Menu" className="w-[24px] h-[24px]" />
        </button>

        <p className="flex items-center gap-[10px] text-text-primary xl:text-[22px] text-[16px] font-light">
          Ayanami rei
          <img
            src="/img/icons/avatar.svg"
            alt="Avatar"
            className="w-[40px] h-[40px] rounded-full xl:w-[30px] xl:h-[30px]"
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
