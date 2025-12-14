function PageHeader({ title, text, placeholder = 'Search Record...', onSearchChange, searchValue }) {
  return (
    <div className="flex items-center max-xl:flex-col max-xl:items-start max-xl:p-[20px] xl:mb-[35px]">
      <p className="flex items-center mb-[20px] xl:mb-0 xl:gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium">
        {title}
        {text && <span className="text-accent-primary xl:text-[40px] text-[20px] font-medium ml-[3px]">{text}</span>}
      </p>
      <div className="xl:flex xl:items-center xl:justify-center w-full">
        <div className="relative">
          <input
            className="w-full xl:w-[575px] h-[38px] rounded-full bg-[#05070A] p-[10px] pl-[44px] outline-none shadow-neon"
            type="text"
            placeholder={placeholder}
            value={searchValue || ''}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
          <img src="/img/icons/search.svg" alt="Search" className="absolute left-[20px] top-[12px] w-[14px] h-[12px]" />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
