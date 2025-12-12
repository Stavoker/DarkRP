function Breadcrumbs() {
  return (
    <div className="flex items-center gap-[8px] text-text-secondary xl:text-[16px] text-[14px] xl:mb-[20px] flex-wrap xl:px-0">
      <span className="flex items-center gap-[8px]">
        <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-accent-primary">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        Shelves
      </span>
      <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-[#95959535]">
        <use href="/img/sprite.svg#arrow"></use>
      </svg>
      <span className="flex items-center gap-[8px]">
        <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-accent-primary">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        DarkRP
      </span>
      <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-[#95959535]">
        <use href="/img/sprite.svg#arrow"></use>
      </svg>
      <span className="flex items-center gap-[8px]">
        <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-accent-primary">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        Administration and Staff Shelves
      </span>
      <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-[#95959535]">
        <use href="/img/sprite.svg#arrow"></use>
      </svg>
      <span className="flex items-center gap-[8px]">
        <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] fill-accent-primary">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        Rules
      </span>
    </div>
  );
}

export default Breadcrumbs;
