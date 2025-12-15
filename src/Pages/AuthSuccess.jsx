import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="text-text-primary text-[28px] xl:text-[40px] font-medium mb-[20px]">Authorization Successful!</h1>
      <p className="text-text-secondary text-[16px] xl:text-[20px]">Redirecting to home page...</p>
    </div>
  );
}

export default AuthSuccess;
