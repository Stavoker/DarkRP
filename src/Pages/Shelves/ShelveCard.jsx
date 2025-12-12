function ShelveCard({ title, icon, backgroundImage, createdDate, updatedDate, onClick }) {
  const defaultBackground = '/img/shelves/error.png';
  const bgImage = backgroundImage || defaultBackground;

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer flex flex-col justify-end xl:w-[320px] w-full xl:h-[259px] h-[206px] bg-background-block rounded-[16px] p-[25px] transition-all duration-300 shadow-neon-card hover:shadow-neon-card-hover"
    >
      <div
        className="shelve-card absolute top-0 left-0 w-full h-[100px] xl:h-[150px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <p className="flex items-center justify-between gap-[10px] text-[22px] font-medium mb-[12px]">
        {title} {icon && <img src={icon} alt={title} className="w-auto h-auto" />}
      </p>

      <div className="flex items-center justify-between gap-[10px]">
        <p className="flex items-center gap-[5px] text-[14px] font-light">
          <img src="/img/icons/clock.svg" alt="Clock" className="w-auto h-auto" />
          {createdDate || 'Created 1 year ago'}
        </p>
        <p className="flex items-center gap-[5px] text-[14px] font-light">
          <img src="/img/icons/pen.svg" alt="Pencil" className="w-auto h-auto" />
          {updatedDate || 'Updated 1 year ago'}
        </p>
      </div>
    </div>
  );
}

export default ShelveCard;
