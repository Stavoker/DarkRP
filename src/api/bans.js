import API_URL from './config.js';

export const getBans = async (page = 1, limit = 10, search = '') => {
  const offset = (page - 1) * limit;
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
  const url = `${API_URL}/api/bans?limit=${limit}&offset=${offset}${searchParam}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch {
      // Not JSON response
    }
    throw new Error(
      `Failed to fetch bans: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
    );
  }

  const result = await response.json();

  if (Array.isArray(result)) {
    return {
      data: result,
      total: result.length === limit ? page * limit + 1 : page * limit,
    };
  }

  return {
    data: result.data || [],
    total: result.total || 0,
  };
};

export const getBanById = async (id) => {
  const response = await fetch(`${API_URL}/api/bans/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ban: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export const getBansBySteamId = async (steamId) => {
  const response = await fetch(`${API_URL}/api/bans/steamid/${steamId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch bans: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
