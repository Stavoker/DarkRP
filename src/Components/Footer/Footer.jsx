import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="relative z-10 bg-background-secondary text-xl font-medium">
      <div className="mx-auto pl-[15px] pr-[15px] xl:pl-[140px] xl:pr-[40px] xl:py-[30px] py-[15px] flex flex-col-reverse xl:flex-row justify-between items-center gap-4">
        {/* Left side - Copyright */}
        <div className="text-text-primary xl:text-[20px] text-[14px]">
          © 2024 WILL TECH DEVELOPMENT LTD™. All rights reserved
        </div>

        {/* Right side - Links and Discord icon */}
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className={`text-text-primary xl:text-[20px] text-[14px] hover:underline ${pathname === '/privacy' ? 'underline' : ''}`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/service"
            className={`text-text-primary xl:text-[20px] text-[14px] hover:underline ${pathname === '/service' ? 'underline' : ''}`}
          >
            Terms Of Service
          </Link>
          <Link
            to="/forums"
            className={`text-text-primary xl:text-[20px] text-[14px] hover:underline ${pathname === '/forums' ? 'underline' : ''}`}
          >
            Forums
          </Link>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className={`"text-text-primary hover:underline`}
            aria-label="Discord"
          >
            <img src="/img/icons/discord.svg" alt="Discord" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
