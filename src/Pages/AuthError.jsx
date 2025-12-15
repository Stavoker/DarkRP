import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth.js';

function AuthError() {
  const { login } = useAuth();
  const [searchParams] = useSearchParams();

  const errorMessage = useMemo(() => {
    const error = searchParams.get('error');
    return error ? decodeURIComponent(error) : '';
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-[20px]">
      <h1 className="text-text-primary text-[28px] xl:text-[40px] font-medium mb-[20px]">Authorization Failed</h1>
      <p className="text-text-secondary text-[16px] xl:text-[20px] mb-[10px] text-center max-w-[600px]">
        There was an error during Steam authentication. Please try again.
      </p>
      {errorMessage && (
        <p className="text-text-cheating text-[14px] xl:text-[16px] mb-[30px] text-center max-w-[600px]">
          Error: {errorMessage}
        </p>
      )}
      <div className="flex gap-[20px]">
        <button
          onClick={login}
          className="px-[30px] py-[15px] bg-accent-primary text-text-primary rounded-[8px] font-medium hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
        <Link
          to="/"
          className="px-[30px] py-[15px] bg-background-block text-text-primary rounded-[8px] font-medium hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default AuthError;
