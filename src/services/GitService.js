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

/**
 * Get the commits for a repository.
 *
 * @param  {String} repo
 * @return {Promise}
 */
export function getCommits(repo) {
  const url = `${API_URL}/repos/${repo}/commits`;
  return fetch(url).then(res => res.json());
}
