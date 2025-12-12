import API_URL from './config.js';

export const getUserTokens = async (steamId) => {
  const response = await fetch(`${API_URL}/api/store/tokens/${steamId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch tokens: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export const getTransactions = async (steamId, limit = 10, offset = 0) => {
  const response = await fetch(`${API_URL}/api/store/transactions/${steamId}?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export const createTransaction = async (transactionData) => {
  const response = await fetch(`${API_URL}/api/store/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactionData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch {
      // Not JSON response
    }
    throw new Error(
      `Failed to create transaction: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
    );
  }

  return await response.json();
};
