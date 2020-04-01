const API_URL = 'https://api.github.com';

/**
 * Get the repository details.
 *
 * @param  {String} repo
 * @return {Promise}
 */
export function getRepository(repo) {
  const url = `${API_URL}/repos/${repo}`;
  return fetch(url).then(res => res.json());
}
