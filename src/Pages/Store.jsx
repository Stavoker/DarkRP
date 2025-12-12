import { useState } from 'react';
import Checkbox from '../Components/Checkbox/Checkbox';
import Input from '../Components/Input/Input';
import TabButton from './Store/TabButton';

function Store() {
  const [activeTab, setActiveTab] = useState('tokens');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [steamId, setSteamId] = useState('');
  const [email, setEmail] = useState('');
  const [tokens, setTokens] = useState('100');
  const [gbp, setGbp] = useState('15');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ steamId, email, tokens, gbp });
  };

  return (
    <div>
      <h1 className="flex items-center mb-0 xl:gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:px-[20px] max-xl:pt-[20px] ">
        Buy
        <span className="text-accent-primary xl:text-[30px] text-[20px] font-medium ml-[5px]">Tokens</span>
      </h1>

      <p className="text-text-secondary xl:text-[28px] text-[18px] mb-[40px] max-xl:px-[20px]">
        Here you can purchase tokens for you or someone else. Tokens can be spent within the in game store. If you are
        logged in your steamid will automatically be input.
      </p>

      <div className="flex flex-col xl:flex-row items-center xl:gap-[50px] gap-[40px]">
        <div className="order-3 xl:order-1 max-xl:w-full max-xl:px-[20px] max-xl:mb-[45px]">
          <h2 className="xl:text-[#828383] text-[#B1B1B1] xl:text-[28px] text-[18px] font-medium xl:mb-[20px] mb-[10px]">
            Recent Payments
          </h2>

          <div className="max-xl:overflow-x-auto">
            <div className="max-xl:flex max-xl:flex-row max-xl:gap-[20px] xl:block max-xl:pb-[16px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <p
                  key={index}
                  className="flex text-[14px] xl:text-[18px] xl:items-center gap-[10px] xl:mb-[32px] last:mb-0 max-xl:mb-0 max-xl:shrink-0"
                >
                  <img
                    src="/img/icons/avatar.svg"
                    alt="Avatar"
                    className="xl:w-[50px] xl:h-[50px] w-[25px] h-[25px] rounded-full"
                  />
                  RedMoreBlue
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[1070px] w-full order-2 xl:order-2 max-xl:px-[20px]">
          <form
            onSubmit={handleSubmit}
            className="xl:bg-background-block xl:rounded-[16px] xl:max-w-[915px] w-full mx-auto xl:px-[40px] xl:py-[30px] xl:shadow-neon"
          >
            {/* SteamID Input */}
            <Input
              label="SteamID"
              type="text"
              value={steamId}
              onChange={(e) => setSteamId(e.target.value)}
              placeholder="STEAM_"
              className="w-full h-[45px] rounded-[8px] px-[15px] border border-border-primary focus:border-accent-primary shadow-neon"
            />

            {/* Email Input */}
            <Input
              label="Email (for receipts)"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@dsfsdf"
              className="w-full h-[45px] rounded-[8px] px-[15px] border border-border-primary focus:border-accent-primary shadow-neon"
            />

            {/* Tokens and GBP Row */}
            <div className="flex max-xl:flex-col xl:gap-[20px] gap-[20px] xl:mb-[25px] mb-[15px]">
              <div className="flex-1">
                <Input
                  label="Tokens"
                  type="number"
                  value={tokens}
                  onChange={(e) => setTokens(e.target.value)}
                  containerClassName="mb-0"
                  placeholder="100"
                  className="w-full h-[45px] rounded-[8px] px-[15px] border border-border-primary focus:border-accent-primary shadow-neon"
                />
              </div>
              <div className="flex-1">
                <Input
                  label="GBP"
                  type="number"
                  value={gbp}
                  onChange={(e) => setGbp(e.target.value)}
                  containerClassName="mb-0"
                  placeholder="10"
                  className="w-full h-[45px] rounded-[8px] px-[15px] border border-border-primary focus:border-accent-primary shadow-neon"
                />
              </div>
            </div>

            {/* Total Cost */}
            <div className="">
              <p className="xl:text-[24px] text-[18px] font-medium text-center">Total Cost</p>
              <p className="text-accent-primary xl:text-[80px] text-[50px] font-medium text-center">
                ${Number(tokens)}
              </p>
            </div>

            {/* Disclaimer Checkbox */}
            <div className="flex items-center justify-center xl:mb-[40px] mb-[30px]">
              <Checkbox
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                label="I understand these digital goods are non refundable and cannot be modified after purchase."
                labelClassName="text-text-secondary text-[18px] underline"
              />
            </div>

            {/* PayPal Button */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full h-[55px] cursor-pointer rounded-[8px] flex items-center justify-center gap-[12px] text-text-primary text-[18px] font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-[8px] transition-opacity ${!agreed ? 'opacity-[0.3]' : 'opacity-100'}`}
                style={
                  !agreed
                    ? { background: 'linear-gradient(95deg, #2DA172 7.61%, #0D1322 74.75%)' }
                    : { background: '#2DA172' }
                }
              />
              <div className="relative z-10 flex items-center justify-center gap-[12px]">
                <div className="w-[30px] h-[30px] rounded-[4px] flex items-center justify-center">
                  <img src="/img/icons/paypal.svg" alt="Paypal" className="" />
                </div>
                Pay with PayPal
              </div>
            </button>
          </form>
        </div>

        <div className="flex flex-row xl:flex-col xl:gap-[35px] xl:mt-[30px] max-xl:px-[20px] max-xl:w-full xl:min-w-[171px] *:h-[36px] *:text-center xl:*:text-[20px] *text-[16px] *:font-medium *:cursor-pointer *:items-center xl:*:justify-center justify-between *:rounded-[6px] order-1 xl:order-3">
          <TabButton
            tabId="tokens"
            activeTab={activeTab}
            hoveredTab={hoveredTab}
            onClick={() => setActiveTab('tokens')}
            onMouseEnter={() => setHoveredTab('tokens')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Tokens
          </TabButton>

          <TabButton
            tabId="donation"
            activeTab={activeTab}
            hoveredTab={hoveredTab}
            onClick={() => setActiveTab('donation')}
            onMouseEnter={() => setHoveredTab('donation')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Donation
          </TabButton>

          <TabButton
            tabId="job-credits"
            activeTab={activeTab}
            hoveredTab={hoveredTab}
            onClick={() => setActiveTab('job-credits')}
            onMouseEnter={() => setHoveredTab('job-credits')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Job Credits
          </TabButton>
        </div>
      </div>
    </div>
  );
}
export default Store;
