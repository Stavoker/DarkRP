import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

function RulesBreadcrumbs() {
  const breadcrumbsItems = [
    {
      label: 'Shelves',
      to: '/shelves',
      icon: 'darkRP',
      iconType: 'fill',
      textColor: 'text-accent-primary',
    },
    {
      label: 'DarkRP',
      to: '/shelves/darkrp',
      icon: 'darkRP',
      iconType: 'fill',
      textColor: 'text-accent-primary',
    },
    {
      label: 'Administration and Staff Shelves',
      to: '/shelves/darkrp/administration-staff',
      icon: 'flag',
      iconType: 'fill',
      textColor: 'text-[#40A6EE]',
      iconClassName: 'fill-[#40A6EE] group-hover:fill-[#40A6EE] transition-fill duration-300',
    },
    {
      label: 'Rules',
      icon: 'darkRP',
      iconType: 'fill',
      textColor: 'text-accent-primary',
    },
  ];

  return (
    <Breadcrumbs
      items={breadcrumbsItems}
      className="xl:text-[16px] text-[14px] xl:mb-[20px] xl:px-0"
      separatorColor="fill-[#95959535]"
      textColor="text-accent-primary"
    />
  );
}

export default RulesBreadcrumbs;
