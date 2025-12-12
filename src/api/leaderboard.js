import API_URL from './config.js';

export const getTokenLeaderboard = async (page = 1, limit = 100) => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${API_URL}/api/leaderboard/tokens?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch token leaderboard: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return {
    data: result.data || result,
    total: result.total || (result.data ? result.data.length : result.length),
  };
};

export const getMoneyLeaderboard = async (page = 1, limit = 100) => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${API_URL}/api/leaderboard/money?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch money leaderboard: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return {
    data: result.data || result,
    total: result.total || (result.data ? result.data.length : result.length),
  };
};

export const getEventLeaderboard = async (page = 1, limit = 100) => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${API_URL}/api/leaderboard/events?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch event leaderboard: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return {
    data: result.data || result,
    total: result.total || (result.data ? result.data.length : result.length),
  };
};

export const getPlaytimeLeaderboard = async (page = 1, limit = 100) => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${API_URL}/api/leaderboard/playtime?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch playtime leaderboard: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return {
    data: result.data || result,
    total: result.total || (result.data ? result.data.length : result.length),
  };
};
