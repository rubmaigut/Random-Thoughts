const API_BASE_URL = 'https://random-thoughts-api-e3uzzxqbva-uc.a.run.app/'; // Replace with your actual API URL

export const getMessages = async () => {
  const response = await fetch(`${API_BASE_URL}/thoughts`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const postMessage = async (message: any) => {
  const response = await fetch(`${API_BASE_URL}/Thoughts/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
