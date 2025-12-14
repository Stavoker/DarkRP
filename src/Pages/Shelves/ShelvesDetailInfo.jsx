const ShelvesDetailInfo = ({ infoShelves, onInfoActivityClick, activityList }) => {
  return (
    <div>
      <h1 className="xl:text-[50px] text-[30px] font-medium xl:my-[15px]">{infoShelves}</h1>

      <p className="text-text-secondary xl:text-[22px] text-[18px] font-light xl:mb-[50px] mb-[25px]">
        The Staff Team takes care of Cloud Gaming, ensuring that all players recieve an equally enjoyable experience.If
        at any time you need to contact a staff member in game, please use the "!report" command.
      </p>

      <ul className="flex flex-col xl:gap-[25px] gap-[20px] xl:mb-[80px] mb-[40px]">
        {activityList.map((activity) => (
          <li
            key={activity.id}
            onClick={() => onInfoActivityClick(activity)}
            className="cursor-pointer relative transition-all duration-300 xl:pl-[20px] pl-[8px] hover:bg-[linear-gradient(95deg,#2DA172_-157.43%,#0B0E14_91.51%)]"
          >
            <span className="absolute left-0 top-0 xl:w-[9px] w-[3px] h-full bg-accent-primary"></span>
            <h2 className="xl:text-[36px] text-[16px] font-medium mb-[10px]">{activity.title}</h2>
            <p className="text-text-secondary xl:text-[20px] text-[14px]">{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShelvesDetailInfo;
