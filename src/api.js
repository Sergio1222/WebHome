const apiAddress = 'https://jordan.ashton.fashion/api/goods/30/comments';

export const sendQuerry = (options = {}, searchParameter) => (
  fetch(
    `${apiAddress}?page=${searchParameter}`,
    options,
  )
    .then((response) => response.json())
    .catch(console.log)
);

export const post = (comment) => {
  const queryOptions = {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  return sendQuerry(queryOptions)
    .then((result) => result);
};
