export const formatTimestamp = (timestamp) => {
  if (!timestamp && timestamp !== 0) return 'N/A';

  try {
    let timestampValue = timestamp;
    if (typeof timestamp === 'string') {
      timestampValue = parseFloat(timestamp);
      if (isNaN(timestampValue)) {
        const date = new Date(timestamp);
        if (!isNaN(date.getTime())) {
          timestampValue = Math.floor(date.getTime() / 1000);
        } else {
          return 'N/A';
        }
      }
    }

    const timestampInSeconds = timestampValue > 10000000000 ? Math.floor(timestampValue / 1000) : timestampValue;
    const date = new Date(timestampInSeconds * 1000);

    if (isNaN(date.getTime())) {
      console.warn('Invalid timestamp:', timestamp, 'converted to:', timestampInSeconds);
      return 'N/A';
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.warn('Error formatting timestamp:', timestamp, error);
    return 'N/A';
  }
};

export const getRemainingTime = (length, startTime) => {
  if (!length || length === 0 || length === '0' || String(length).toLowerCase() === 'permanent') {
    return 'Permanent';
  }

  if (!startTime) {
    return 'N/A';
  }

  try {
    const startTimestamp = startTime > 10000000000 ? Math.floor(startTime / 1000) : startTime;
    const lengthInSeconds = parseInt(length, 10);

    if (isNaN(lengthInSeconds)) {
      return 'N/A';
    }

    const endTime = startTimestamp + lengthInSeconds;
    const currentTime = Math.floor(Date.now() / 1000);
    const remainingSeconds = endTime - currentTime;

    if (remainingSeconds <= 0) {
      return 'Expired';
    }

    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
    if (seconds > 0 && parts.length === 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

    return parts.length > 0 ? parts.join(', ') : 'Less than a second';
  } catch {
    return 'N/A';
  }
};

export const formatLength = (length) => {
  if (length === null || length === undefined || length === '') return 'N/A';
  if (length === 0 || length === '0' || String(length).toLowerCase() === 'permanent') {
    return 'Permanent';
  }

  try {
    const lengthInSeconds = typeof length === 'string' ? parseInt(length, 10) : Number(length);
    if (isNaN(lengthInSeconds)) {
      console.warn('Invalid length value:', length);
      return String(length);
    }

    const days = Math.floor(lengthInSeconds / 86400);
    const hours = Math.floor((lengthInSeconds % 86400) / 3600);
    const minutes = Math.floor((lengthInSeconds % 3600) / 60);

    const parts = [];
    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);

    return parts.length > 0 ? parts.join(', ') : `${lengthInSeconds} second${lengthInSeconds !== 1 ? 's' : ''}`;
  } catch (error) {
    console.warn('Error formatting length:', length, error);
    return String(length);
  }
};
