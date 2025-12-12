function ArrowIcon({ isActive, isHovered }) {
  const arrowClasses = `w-4 h-4 ml-[10px] transition-transform duration-200 ${
    isActive || isHovered
      ? 'fill-accent-primary stroke-accent-primary rotate-90'
      : 'fill-primary stroke-primary group-hover:fill-accent-primary group-hover:stroke-accent-primary group-hover:rotate-90'
  }`;

  return (
    <svg className={arrowClasses}>
      <use href="/img/sprite.svg#arrow" />
    </svg>
  );
}

export default ArrowIcon;
