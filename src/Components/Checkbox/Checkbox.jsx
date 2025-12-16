function Checkbox({ id, checked, onChange, label, labelClassName = '' }) {
  return (
    <div className="flex items-center gap-[10px]">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} className="hidden" />
      <label htmlFor={id} className="flex items-start gap-[10px] cursor-pointer group">
        <div
          className={`relative xl:min-w-[20px] xl:min-h-[20px] min-w-[15px] min-h-[15px] mt-[5px] text-[14px] xl:text-[18px] rounded-[2px] border border-[#C4DAD1] transition-colors flex items-center justify-center ${
            checked ? 'bg-accent-primary border-accent-primary' : 'bg-transparent'
          }`}
        >
          {checked && (
            <svg
              className="w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
        {label && <span className={labelClassName}>{label}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
