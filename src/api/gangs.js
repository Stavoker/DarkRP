import API_URL from './config.js';

export const getGangs = async (page = 1, limit = 10, search = '') => {
  const offset = (page - 1) * limit;
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
  const url = `${API_URL}/api/gangs?limit=${limit}&offset=${offset}${searchParam}`;

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
      `Failed to fetch gangs: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
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

export const getGangById = async (id) => {
  const response = await fetch(`${API_URL}/api/gangs/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch gang: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
