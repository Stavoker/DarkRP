const ShelvesDetailActivity = ({ infoActivity }) => {
  if (!infoActivity) return null;

  return (
    <div>
      <h1 className="xl:text-[36px] text-[16px] font-medium mb-[10px] xl:mb-[20px]">{infoActivity.title}</h1>
      {infoActivity.text && infoActivity.text}
      {infoActivity.description && infoActivity.description}
    </div>
  );
};

export default ShelvesDetailActivity;
