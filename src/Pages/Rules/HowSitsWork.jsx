import { Link, useLocation } from 'react-router-dom';

function HowSitsWork() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  const navigationPages = [
    { id: 'how-sits-work', title: 'How Sits Work', path: '/rules/administration-staff/how-sits-work' },
    {
      id: 'want-to-join-staff',
      title: 'Want to join the Staff Team?',
      path: '/rules/administration-staff/want-to-join-staff',
    },
    { id: 'staff-roles', title: 'Staff Roles', path: '/rules/administration-staff/staff-roles' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between xl:mb-[15px] mb-0 max-xl:px-[20px] xl:px-0">
        <h1 className="text-text-primary xl:text-[50px] text-[28px] font-medium">How Sits Work</h1>
      </div>

      {/* Content */}
      <div className="text-text-secondary xl:text-[20px] text-[16px] xl:mb-[40px] mb-[25px] leading-relaxed max-xl:px-[20px] xl:px-0">
        <p>
          Here on Cloud Gaming, if you make a report or are reported you are taken to the "Sit Area". We provide a
          private area for staff to handle reports and ensure a fair resolution.
        </p>
      </div>

      {/* Navigating the Book */}
      <div className="xl:mb-[40px] mb-[20px] max-xl:px-[20px] xl:px-0">
        <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[10px] mb-[8px]">
          Navigating the Book
        </h3>
        <nav className="flex flex-col gap-[10px]">
          {navigationPages.map((page) => {
            const isActive = currentPath === page.id;
            return (
              <Link
                key={page.id}
                to={page.path}
                className={`text-[16px] transition-colors xl:border-l-4 border-l-2 pl-[2px] ${
                  isActive
                    ? 'text-[#40A6EE] border-[#40A6EE]'
                    : 'text-accent-primary border-accent-primary hover:text-text-primary hover:border-accent-primary'
                }`}
              >
                {page.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default HowSitsWork;
