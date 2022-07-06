export async function getFetch(endpoint, token = null) {
  try {
    const authorization = token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {};
    const resp = await fetch(`${baseUrl}/${endpoint}`, authorization);
    console.log('resp fetch:', resp);
    if (resp.ok) {
      return resp.json();
    }
    throw new Error('404 Not Found');
  } catch (err) {
    throw err;
  }
}

export async function postFetch(endpoint, inputData, token = null) {
  try {
    const authorization = token ? { Authorization: `Bearer ${token}` } : {};
    const resp = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authorization,
      },
      // headers: token ? {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // } : {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(inputData),
    });
    console.log('resp fetch:', resp);
    return resp.json();
  } catch (err) {
    console.log('error in postFetch:', err);
    throw err;
  }
}

export const baseUrl = process.env.REACT_APP_BASE_URL;
if (!baseUrl) throw new Error('baseUrl not found');
