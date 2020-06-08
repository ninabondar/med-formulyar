const baseURL = url => `${process.env.REACT_APP_API_HOST}/${url}`;

export const get = url => {
  fetch(baseURL(url))
    .then(response => response.json())
};
