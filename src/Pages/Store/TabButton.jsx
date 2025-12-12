const GRADIENT_BG = 'linear-gradient(275deg, #2DA172 -24.64%, #0B0E14 91.04%)';

function TabButton({ children, tabId, activeTab, hoveredTab, onClick, onMouseEnter, onMouseLeave }) {
  const isActive = activeTab === tabId;
  const isHovered = hoveredTab === tabId;
  const isActiveOrHovered = isActive || isHovered;

  return (
    <button
      type="button"
      className={`flex items-center py-[3px] px-[17px] xl:py-0 xl:px-0 ${isActiveOrHovered ? 'text-text-primary' : 'text-text-secondary'} ${isActive && window.innerWidth < 768 ? 'bg-accent-primary' : ''}`}
      style={isActiveOrHovered && window.innerWidth >= 768 ? { background: GRADIENT_BG } : {}}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default TabButton;
