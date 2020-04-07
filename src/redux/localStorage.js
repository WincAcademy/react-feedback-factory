export function loadState() {
  const data = localStorage.getItem('state');

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.warn('Unable to load state', error);
    }
  }

  return undefined;
}

export function saveState(state) {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem('state', data);
  } catch(error) {
    console.warn('Unable to save state', error);
  }
}
