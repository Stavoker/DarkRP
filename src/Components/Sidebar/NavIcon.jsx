function NavIcon({ iconId, isOpen, isActive }) {
  const isGangs = iconId === 'gangs';
  const isLeaderboard = iconId === 'leaderboard';
  const filterClasses = isActive ? 'filter-neon' : 'filter-neon-hover';
  const baseClasses = `w-6 h-6 ${isOpen ? 'mr-[35px]' : ''} shrink-0 transition-colors transition-all ${filterClasses}`;

  const colorClasses = isActive
    ? isGangs
      ? 'text-accent-primary'
      : isLeaderboard
        ? 'fill-transparent stroke-accent-primary'
        : 'fill-accent-primary stroke-accent-primary'
    : isGangs
      ? 'text-text-primary group-hover:text-accent-primary'
      : isLeaderboard
        ? 'fill-transparent stroke-primary group-hover:stroke-accent-primary'
        : 'fill-primary stroke-primary group-hover:fill-accent-primary group-hover:stroke-accent-primary';

  return (
    <svg className={`${baseClasses} ${colorClasses}`}>
      <use href={`/img/sprite.svg?v=10#${iconId}`} />
    </svg>
  );
}

export default NavIcon;
