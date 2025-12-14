function ShelvesDetailDetails({ createdAt, updatedAt }) {
  return (
    <div className="flex flex-col ">
      <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[20px] mb-[15px]">Details</h3>

      <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
        <img src="/img/icons/clock.svg" alt="Clock" className="w-auto h-auto" />
        Created {createdAt}
      </p>
      <p className="flex items-center gap-[5px] text-[14px] font-light xl:mb-[17px] mb-[10px]">
        <img src="/img/icons/pen.svg" alt="Pencil" className="w-auto h-auto" />
        Updated {updatedAt}
      </p>
    </div>
  );
}

export default ShelvesDetailDetails;
