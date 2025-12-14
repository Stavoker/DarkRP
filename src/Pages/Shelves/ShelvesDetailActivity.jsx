const ShelvesDetailActivity = ({ infoActivity }) => {
  if (!infoActivity) return null;

  return (
    <div>
      <h1 className="xl:text-[36px] text-[16px] font-medium mb-[10px]">{infoActivity.title}</h1>
      <p className="text-text-secondary xl:text-[22px] text-[14px]">{infoActivity.description}</p>
    </div>
  );
};

export default ShelvesDetailActivity;
