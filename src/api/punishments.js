import API_URL from './config.js';

export const getPunishments = async (page = 1, limit = 10, search = '') => {
  const offset = (page - 1) * limit;
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
  const url = `${API_URL}/api/punishments?limit=${limit}&offset=${offset}${searchParam}`;

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
      `Failed to fetch punishments: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
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

export const getPunishmentById = async (id) => {
  const response = await fetch(`${API_URL}/api/punishments/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch punishment: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export const getPunishmentsBySteamId = async (steamId) => {
  const response = await fetch(`${API_URL}/api/punishments/steamid/${steamId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch punishments: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
