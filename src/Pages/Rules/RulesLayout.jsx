import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import RulesBreadcrumbs from './Breadcrumbs';
import { navigationPages, rulesDataCategories } from './rulesData';

function RulesLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop()?.replace(/-/g, ' ').toLowerCase() || '';
  const [openCategories, setOpenCategories] = useState(new Set());
  const [activeSections, setActiveSections] = useState(new Set());
  const [activeSubSections, setActiveSubSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px 0px 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      setActiveSections((prevSections) => {
        const newSections = new Set(prevSections);
        entries.forEach((entry) => {
          const id = entry.target.id;
          const isMainSection = rulesDataCategories.some((cat) => cat.id === id);

          if (isMainSection) {
            if (entry.isIntersecting) {
              newSections.add(id);
              const category = rulesDataCategories.find((cat) => cat.id === id);
              if (category && category.pages.length > 0) {
                setOpenCategories((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(id);
                  return newSet;
                });
              }
            } else {
              newSections.delete(id);
            }
          }
        });
        return newSections;
      });

      setActiveSubSections((prevSubSections) => {
        const newSubSections = new Set(prevSubSections);
        entries.forEach((entry) => {
          const id = entry.target.id;
          const isSubSection = rulesDataCategories.some((cat) => cat.pages.some((page) => page.id === id));

          if (isSubSection) {
            if (entry.isIntersecting) {
              newSubSections.add(id);
            } else {
              newSubSections.delete(id);
            }
          }
        });
        return newSubSections;
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const allElements = [];

    const timeoutId = setTimeout(() => {
      rulesDataCategories.forEach((cat) => {
        const element = document.getElementById(cat.id);
        if (element) {
          observer.observe(element);
          allElements.push(element);
        }

        cat.pages.forEach((page) => {
          const subElement = document.getElementById(page.id);
          if (subElement) {
            observer.observe(subElement);
            allElements.push(subElement);
          }
        });
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      allElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const toggleCategory = (categoryId, e) => {
    e.preventDefault();
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[40px] max-xl:pb-[45px]">
      <h2 className="text-text-primary text-[20px] font-medium hidden max-xl:block p-[20px] pb-0">Shelves</h2>
      <div className="order-1 xl:hidden max-xl:p-[20px]">
        <RulesBreadcrumbs />
      </div>

      <div className="flex flex-col xl:items-end xl:text-right space-y-[5px] xl:max-w-[160px] xl:mb-[24px] xl:pt-[100px] order-2 xl:order-3 max-xl:px-[20px] max-xl:mb-[20px] xl:sticky xl:top-[120px] xl:self-start xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto">
        <p className="text-[#828383] xl:text-[26px] text-[18px] font-medium"> Details</p>
        <p className="xl:relative w-fit text-[#B1B1B1] xl:text-[16px] text-[14px] font-light max-xl:flex max-xl:items-center max-xl:gap-[10px]">
          <img
            src="/img/icons/version.svg"
            alt="Version"
            className="xl:absolute xl:top-[3px] xl:-left-[25px] -left-[20px] w-[16px] h-[16px]"
          />
          Version #60
        </p>
        <p className="xl:relative w-fit text-[#B1B1B1] xl:text-[16px] text-[14px] font-light max-xl:flex max-xl:items-center max-xl:gap-[10px]">
          <img
            src="/img/icons/clock.svg"
            alt="Created"
            className="xl:absolute xl:top-[3px] xl:left-[5px] left-[3px] w-[16px] h-[16px]"
          />
          Wilton created this 1 year ago
        </p>
        <p className="xl:relative w-fit text-[#B1B1B1] xl:text-[16px] text-[14px] font-light max-xl:flex max-xl:items-center max-xl:gap-[10px]">
          <img
            src="/img/icons/pen.svg"
            alt="Updated"
            className="xl:absolute top-[3px] xl:-left-[10px] -left-[8px] w-[16px] h-[16px]"
          />
          Noseian updated this 1 year ago
        </p>
      </div>

      <aside className="xl:w-[280px] shrink-0 xl:ml-[35px] order-3 xl:order-1 max-xl:px-[20px] xl:sticky xl:top-[120px] xl:self-start xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto xl:pr-[10px] scrollbar-hide">
        <h2 className="text-text-primary xl:text-[30px] text-[20px] font-medium xl:mb-[30px] mb-[15px] max-xl:hidden">
          Shelves
        </h2>

        <div className="xl:mb-[20px] mb-[15px] order-3">
          <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[10px] mb-[8px]">
            Page Navigation
          </h3>
          <nav className="flex flex-col xl:flex-col max-xl:grid max-xl:grid-cols-2 gap-[8px]">
            {rulesDataCategories.map((category) => {
              const isActive = activeSections.has(category.id);
              return (
              <div key={category.id}>
                  {category.pages.length > 0 ? (
                    <a
                      href={`#${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCategory(category.id, e);
                        const element = document.getElementById(category.id);
                        if (element) {
                          const offset = 120;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className={`font-medium text-[16px] transition-colors text-left flex items-center gap-[10px] ${
                        isActive ? 'text-text-primary' : 'text-accent-primary hover:opacity-80'
                      }`}
                    >
                      {category.title}
                      <svg
                        className={`w-[9px] h-[17px] fill-accent-primary transition-transform duration-300 ${openCategories.has(category.id) ? 'rotate-90' : ''}`}
                      >
                        <use href="/img/sprite.svg#arrow" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={`#${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(category.id);
                        if (element) {
                          const offset = 120;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className={`font-medium text-[16px] transition-colors ${
                        isActive ? 'text-text-primary' : 'text-accent-primary hover:opacity-80'
                      }`}
                >
                  {category.title}
                    </a>
                  )}
                  {category.pages.length > 0 && openCategories.has(category.id) && (
                    <ul className="ml-[10px] flex flex-col gap-[5px] mt-[5px]">
                      {category.pages.map((page) => {
                        const isSubActive = activeSubSections.has(page.id);
                        return (
                      <li key={page.id}>
                            <a
                              href={`#${page.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(page.id);
                                if (element) {
                                  const offset = 120;
                                  const elementPosition = element.getBoundingClientRect().top;
                                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                                  window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth',
                                  });
                                }
                              }}
                              className={`font-medium text-[16px] transition-colors ${
                                isSubActive ? 'text-text-primary' : 'text-accent-primary hover:opacity-80'
                              }`}
                        >
                          • {page.title}
                            </a>
                      </li>
                        );
                      })}
                  </ul>
                )}
              </div>
              );
            })}
          </nav>
        </div>

        <div className="xl:mb-[40px] mb-[20px] order-4">
          <h3 className="text-text-secondary xl:text-[28px] text-[18px] font-medium xl:mb-[10px] mb-[8px]">
            Navigating the Book
          </h3>
          <nav className="flex flex-col gap-[10px]">
            {navigationPages.map((page) => {
              const isActive = currentPath === page.id.replace(/-/g, ' ').toLowerCase();
              return (
                <Link
                  key={page.id}
                  to={page.path}
                  className={`text-[16px] transition-colors xl:border-l-4 border-l-2 pl-[2px] ${
                    currentPath === page.id
                      ? 'text-[#40A6EE] border-[#40A6EE]'
                      : 'text-accent-primary border-accent-primary hover:text-text-primary hover:border-accent-primary'
                  }
                    ${isActive ? 'text-text-primary border-accent-primary' : ''}`}
                >
                  {page.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="flex-1 min-w-0 max-w-[1060px] order-5 xl:order-2">
        <div className="hidden xl:block">
          <RulesBreadcrumbs />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default RulesLayout;
