import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Checkbox from '../Components/Checkbox/Checkbox';
import Input from '../Components/Input/Input';
import { capturePayPalOrder, createPayPalOrder } from '../api/paypal.js';
import TabButton from './Store/TabButton';

function Store() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('tokens');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [steamId, setSteamId] = useState('');
  const [email, setEmail] = useState('');
  const [tokens, setTokens] = useState('100');
  const [gbp, setGbp] = useState('15');
  const [agreed, setAgreed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);

  const minTokens = 0;
  const maxTokens = 1000;

  const updateSliderValue = useCallback((clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newValue = Math.round(percentage * (maxTokens - minTokens) + minTokens);
    return newValue;
  }, []);

  const handleSliderMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const newValue = updateSliderValue(e.clientX);
    setTokens(newValue.toString());
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const newValue = updateSliderValue(e.clientX);
        setTokens(newValue.toString());
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, updateSliderValue]);

  // Обработка успешного/отмененного платежа из URL параметров
  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');
    const orderId = searchParams.get('token');

    if (success === 'true' && orderId) {
      // Захватываем платеж
      capturePayPalOrder(orderId)
        .then((result) => {
          setTimeout(() => {
            setPaymentStatus({ type: 'success', message: `Successfully purchased ${result.tokens} tokens!` });
            // Очищаем форму
            setSteamId('');
            setEmail('');
            setTokens('100');
            setGbp('15');
            setAgreed(false);
            setSearchParams({});
          }, 0);
        })
        .catch((error) => {
          setTimeout(() => {
            setPaymentStatus({ type: 'error', message: `Payment failed: ${error.message}` });
            setSearchParams({});
          }, 0);
        });
    } else if (canceled === 'true') {
      setTimeout(() => {
        setPaymentStatus({ type: 'canceled', message: 'Payment was canceled' });
        setSearchParams({});
      }, 0);
    }
  }, [searchParams, setSearchParams]);

  const handlePayPalClick = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setPaymentStatus({ type: 'error', message: 'Please agree to the terms' });
      return;
    }

    if (!steamId || !tokens || !gbp) {
      setPaymentStatus({ type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    try {
      setPaymentStatus({ type: 'loading', message: 'Creating order...' });
      const order = await createPayPalOrder({
        steamId,
        email,
        tokens: Number(tokens),
        amount: Number(gbp),
      });

      // Перенаправляем на PayPal для оплаты
      if (order.approvalUrl) {
        window.location.href = order.approvalUrl;
      } else {
        throw new Error('No approval URL received from PayPal');
      }
    } catch (error) {
      console.error('Error creating PayPal order:', error);
      setPaymentStatus({ type: 'error', message: `Failed to create order: ${error.message}` });
    }
  };

  return (
    <div>
      <h1 className="flex items-center mb-0 xl:gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:px-[20px] max-xl:pt-[20px] ">
        Buy
        <span className="text-accent-primary xl:text-[40px] text-[20px] font-medium ml-[3px]">Tokens</span>
      </h1>

      <p className="text-text-secondary xl:text-[28px] text-[18px] mb-[40px] max-xl:px-[20px]">
        Here you can purchase tokens for you or someone else. Tokens can be spent within the in game store. If you are
        logged in your steamid will automatically be input.
      </p>

      <div className="flex flex-col xl:flex-row xl:gap-[50px] gap-[40px] xl:mb-[80px] mb-[40px]">
        <div className="order-3 xl:order-1 max-xl:w-full max-xl:px-[20px] max-xl:mb-[45px] xl:mt-[30px]">
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
            onSubmit={(e) => {
              e.preventDefault();
              // Форма обрабатывается через PayPal кнопки
            }}
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

            <div className="relative xl:mb-[40px] mb-[30px]">
              <div
                ref={sliderRef}
                className="relative h-[4px] bg-[#9595954d] rounded-full cursor-pointer"
                onMouseDown={handleSliderMouseDown}
                onClick={(e) => {
                  const newValue = updateSliderValue(e.clientX);
                  setTokens(newValue.toString());
                }}
              >
                <div
                  className="absolute h-full bg-accent-primary rounded-full"
                  style={{ width: `${((Number(tokens) || 0) / maxTokens) * 100}%` }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-accent-primary rounded-full cursor-pointer ${
                    isDragging ? 'scale-110' : 'hover:scale-110'
                  }`}
                  style={{
                    left: `calc(${Math.max(0, Math.min(100, ((Number(tokens) || 0) / maxTokens) * 100))}% - 8px)`,
                    transition: isDragging ? 'none' : 'transform 0.2s',
                  }}
                />
              </div>
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

            {/* Payment Status Message */}
            {paymentStatus && paymentStatus.type !== 'loading' && (
              <div
                className={`mb-[20px] p-[15px] rounded-[8px] ${
                  paymentStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : paymentStatus.type === 'error'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                }`}
              >
                <p className="text-[16px]">{paymentStatus.message}</p>
              </div>
            )}

            {/* Loading Message */}
            {paymentStatus?.type === 'loading' && (
              <div className="mb-[20px] p-[15px] rounded-[8px] bg-blue-500/20 text-blue-400 border border-blue-500/50">
                <p className="text-[16px]">{paymentStatus.message}</p>
              </div>
            )}

            {/* PayPal Button */}
            <div className="flex flex-col gap-[10px]">
              <button
                type="button"
                onClick={handlePayPalClick}
                disabled={!agreed || paymentStatus?.type === 'loading'}
                className="w-full h-[55px] cursor-pointer rounded-[8px] flex items-center justify-center gap-[12px] text-text-primary text-[18px] font-medium transition-background hover:bg-accent-primary disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 rounded-[8px] transition-opacity ${!agreed ? 'opacity-[0.3]' : 'opacity-100'}`}
                  style={{ background: 'linear-gradient(95deg, #2DA172 7.61%, #0D1322 74.75%)', opacity: 0.3 }}
                />
                <div className="relative z-10 flex items-center justify-center gap-[12px]">
                  <div className="w-[30px] h-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/icons/paypal.svg" alt="Paypal" className="" />
                  </div>
                  Pay with PayPal
                </div>
              </button>
              <button
                type="button"
                onClick={handlePayPalClick}
                disabled={!agreed || paymentStatus?.type === 'loading'}
                className="w-full h-[55px] cursor-pointer rounded-[8px] flex items-center justify-center gap-[12px] text-text-primary text-[18px] font-medium transition-opacity hover:bg-accent-primary disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 rounded-[8px] transition-opacity ${!agreed ? 'opacity-[0.3]' : 'opacity-100'}`}
                  style={{ background: 'linear-gradient(95deg, #2DA172 7.61%, #0D1322 74.75%)', opacity: 0.3 }}
                />
                <div className="relative z-10 flex items-center justify-center gap-[12px]">
                  <div className="w-[30px] h-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/icons/stripe.svg" alt="Stripe" className="w-[65px] h-[27px]" />
                  </div>
                  Pay with Stripe
                </div>
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-row xl:flex-col xl:gap-[35px] xl:mt-[30px] max-xl:px-[20px] max-xl:w-full xl:min-w-[171px] *:h-[36px] *:text-center xl:*:text-[20px] *text-[16px] *:font-medium *:cursor-pointer *:items-center xl:*:justify-center *:rounded-[6px] order-1 xl:order-3">
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
