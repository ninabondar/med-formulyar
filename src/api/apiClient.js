export const baseURL = url => `http://77.120.33.186:8888/achi/${url}`;

export const getClassesFromAPI = url => {
  fetch(baseURL(url))
    .then(response => response.json())
    //.then(data => data.value);
};

export const endpoints = {
  classes: "classes"
};
