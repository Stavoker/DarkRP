function NavIcon({ iconId, isOpen, isActive }) {
  const isGangs = iconId === 'gangs';
  const baseClasses = `w-6 h-6 ${isOpen ? 'mr-[35px]' : ''} shrink-0 transition-colors`;

  const colorClasses = isActive
    ? isGangs
      ? 'fill-accent-primary'
      : 'fill-accent-primary stroke-accent-primary'
    : isGangs
      ? 'fill-primary group-hover:fill-accent-primary'
      : 'fill-primary stroke-primary group-hover:fill-accent-primary group-hover:stroke-accent-primary';

  return (
    <svg className={`${baseClasses} ${colorClasses}`}>
      <use href={`/img/sprite.svg#${iconId}`} />
    </svg>
  );
}

export default NavIcon;
