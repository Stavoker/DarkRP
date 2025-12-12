function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  containerClassName = '',
  ...props
}) {
  const baseClasses = 'xl:bg-[#05070A] bg-[#0D1322] outline-none text-text-primary text-[16px] transition-colors';
  const numberInputClasses =
    type === 'number'
      ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      : '';
  const inputClasses = `${baseClasses} ${numberInputClasses} ${className} border-none rounded-[12px]`;

  return (
    <div className={`${containerClassName || 'xl:mb-[30px] mb-[20px]'}`}>
      {label && <label className="block xl:text-[18px] text-[16px] xl:mb-[15px] mb-[10px]">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
    </div>
  );
}

export default Input;
