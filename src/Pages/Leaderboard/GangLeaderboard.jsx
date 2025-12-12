function GangLeaderboard() {
  const colorElements = {
    meth: 'bg-background-meth',
    moonshine: 'bg-background-moonshine',
    gold: 'bg-background-gold',
    weed: 'bg-background-weed',
    turf: 'bg-background-turf',
    cocaine: 'bg-background-cocaine',
  };

  return (
    <div>
      <p className="flex items-center mb-[20px] xl:mb-0 xl:gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:m-[20px]">
        Gang
        <span className="text-accent-primary xl:text-[30px] text-[20px] font-medium">Leaderboard Hub</span>
      </p>

      <ul className="grid xl:gap-[30px] gap-[14px] xl:mb-[80px] max-xl:m-[20px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="relative bg-background-block p-[25px] ml-[6px] rounded-r-[15px] shadow-neon">
            <span
              className={`block w-[6px] h-full ${colorElements['meth']} absolute top-0 left-0 rounded-l-[6px]`}
            ></span>
            <div className="flex items-center justify-between mb-[20px]">
              <p className="flex items-center gap-[10px] xl:text-[26px] text-[18px] font-medium">
                Meth <img src="/img/icons/meth.svg" alt="Meth" className="w-auto xl:h-auto h-[20px]" />
              </p>
              <p className="text-text-primary text-[18px] py-[6px] px-[10px] pb-[5px] bg-[#2BA071] rounded-[10px]">
                This Months Leaderboard
              </p>
            </div>
            <div className="">
              <div className="flex *:w-full *:grid *:gap-[22px] *:items-start mb-[20px]">
                <p className="xl:text-[22px] text-[16px] font-medium">Position</p>
                <p className="xl:text-[22px] text-[16px] font-medium">Player</p>
                <p className="xl:text-[22px] text-[16px] font-medium">Total</p>
              </div>

              <div className="grid xl:gap-[35px] gap-[14px] *:border-b *:border-border-primary  *:last:border-b-0 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex *:w-full xl:pb-[35px] pb-[14px] last:pb-0">
                    <p className="flex items-center gap-[17px]">
                      {index + 1}
                      {index + 1 === 1 && (
                        <svg className="w-[20px] h-[11px] xl:w-[32px] xl:h-[20px] fill-gold stroke-gold">
                          <use href="/img/sprite.svg#leaderboard"></use>
                        </svg>
                      )}
                    </p>
                    <p className="flex items-center gap-[10px] max-xl:mr-[20px]">
                      <img
                        src="/img/icons/avatar.svg"
                        alt="Avatar"
                        className="w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] rounded-full"
                      />
                      SpookyBoi
                    </p>
                    <p className="">£5,983,868</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GangLeaderboard;
