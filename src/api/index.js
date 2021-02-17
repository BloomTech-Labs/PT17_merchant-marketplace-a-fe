import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => res.data)
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const apiAuthGetId = (authHeader, oktaId) => {
  return axios.get(`${apiUrl}/${oktaId}`, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getProfileIdData = (authState, oktaId) => {
  try {
    return apiAuthGetId(getAuthHeader(authState), oktaId).then(
      response => response.data
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const putData = (url, editedData, authState) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .put(url, editedData, { headers })
    .then(res => res.data)
    .catch(err => err);
};

const postData = (url, newData, authState) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(url, newData, { headers })
    .then(res => res.data)
    .catch(err => err);
};

const deleteData = (url, authState) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  console.log('url', url);
  return axios
    .delete(url, { headers })
    .then(res => {
      console.log('deleteData api res.data', res.data);
      JSON.parse(res.data);
    })
    .catch(err => console.log('deleteData api error', err));
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getProfileIdData,
  getDSData,
  postData,
  putData,
  deleteData,
};
