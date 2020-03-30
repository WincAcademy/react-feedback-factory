const API_URL = 'http://localhost:3000';

/**
 * Get feedback for the given repository.
 *
 * @param  {String} repo
 * @return {Promise}
 */
export function getFeedback(repo) {
  const url = `${API_URL}/feedback?repo=${repo}`;
  return fetch(url).then(res => res.json());
}
