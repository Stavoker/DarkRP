export const navItems = [
  { path: '/bans', label: 'Ban', iconId: 'ban' },
  { path: '/punishments', label: 'Punishments', iconId: 'punishments' },
  { path: '/gangs', label: 'Gangs', iconId: 'gangs' },
  { path: '/staff', label: 'Staff', iconId: 'staff' },
  { path: '/earners', label: 'Earners', iconId: 'earners' },
  {
    path: '/leaderboard',
    label: 'Leaderboard',
    iconId: 'leaderboard',
    hasSubmenu: true,
    submenu: [
      { path: '/leaderboard/tokens', label: 'Token Leaderboard' },
      { path: '/leaderboard/events', label: 'Event Leaderboard' },
      { path: '/leaderboard/gangs', label: 'Gang Leaderboard Hub' },
    ],
  },
  { path: '/rules', label: 'Rules', iconId: 'rules' },
  { path: '/shelves', label: 'Shelves', iconId: 'shelves' },
  { path: '/store', label: 'Store', iconId: 'store' },
];
