import { Link } from 'react-router-dom';

function SidebarLogo({ isOpen, onLogoClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    // Закрываем мобильное меню при клике на логотип
    if (onLogoClick) {
      onLogoClick();
    }
  };

  return (
    <div className="flex items-center justify-between pt-[38px] px-[20px]" onClick={handleClick}>
      {isOpen ? (
        <Link to="/" className="flex">
          <img src="/img/icons/logo.svg" alt="Logo" className="h-[47px] w-auto" />
          <img src="/img/icons/logo_text.svg" alt="Fractal Gaming" className="h-[47px] w-auto" />
        </Link>
      ) : (
        <Link to="/" className="flex w-full">
          <img src="/img/icons/logo.svg" alt="Logo" className="h-[47px] w-auto" />
        </Link>
      )}
    </div>
  );
}

export default SidebarLogo;
