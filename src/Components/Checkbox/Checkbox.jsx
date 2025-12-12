function Checkbox({ id, checked, onChange, label, labelClassName = '' }) {
  return (
    <div className="flex items-center gap-[10px]">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} className="hidden" />
      <label htmlFor={id} className="flex items-start gap-[10px] cursor-pointer group">
        <div
          className={`xl:min-w-[20px] xl:min-h-[20px] min-w-[15px] min-h-[15px] mt-[5px] text-[14px] xl:text-[18px] rounded-[2px] border border-[#C4DAD1] transition-colors ${
            checked ? 'bg-accent-primary' : 'bg-transparent'
          }`}
        />
        {label && <span className={labelClassName}>{label}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
