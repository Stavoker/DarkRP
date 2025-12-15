import API_URL from './config.js';

export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/api/auth/me?token=${encodeURIComponent(token)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return null;
    }
    throw new Error(`Failed to get user: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to logout: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
