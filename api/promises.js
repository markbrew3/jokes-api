const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single';
// const postEndpoint = 'https://teaching-promises-default-rtdb.firebaseio.com';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getJoke;
