import API_URL from './config.js';

export const createPayPalOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/api/paypal/create-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
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
      `Failed to create PayPal order: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
    );
  }

  return await response.json();
};

export const capturePayPalOrder = async (orderId) => {
  const response = await fetch(`${API_URL}/api/paypal/capture-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderId }),
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
      `Failed to capture PayPal order: ${response.status} ${response.statusText}. ${errorData?.error || errorText}`
    );
  }

  return await response.json();
};
