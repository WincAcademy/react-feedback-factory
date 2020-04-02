const API_URL = 'http://localhost:3000';

/**
 * Get feedback for the given repository.
 *
 * @param  {String} user
 * @param  {String} repo
 * @return {Promise}
 */
export function getFeedback(user, repo) {
  const url = `${API_URL}/feedback?user=${user}&repo=${repo}`;

  return fetch(url)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      return res;
    });
}
