import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}profiles`;
const productsUrl = `${process.env.REACT_APP_API_URI}items`;
const searchUrl = `${process.env.REACT_APP_API_URI}search`;

const search = async searchData => {
  const { title, zip, address, category } = searchData;
  return await axios.get(`${searchUrl}?title=${title}&zip=${zip}`);
};

const ordersUrl = `${process.env.REACT_APP_API_URI}orders`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};
//
const apiAuthGetProducts = authHeader => {
  return axios.get(productsUrl, { headers: authHeader });
};
//ProductsData
const getProductsData = async authState => {
  try {
    return await apiAuthGetProducts(getAuthHeader(authState));
  } catch (error) {
    console.log(error);
    return [];
  }
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

const apiAuthGetOrders = authHeader => {
  return axios.get(ordersUrl, { headers: authHeader });
};

const apiAuthGetId = (authHeader, oktaId) => {
  return axios.get(`${apiUrl}/${oktaId}`, { headers: authHeader });
};

const getProfileData = async authState => {
  try {
    return (await apiAuthGet(getAuthHeader(authState))).data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getOrdersData = async authState => {
  try {
    return await apiAuthGetOrders(getAuthHeader(authState));
  } catch (error) {
    console.log(error);
    return [];
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
  apiAuthGet,
  sleep,
  getAuthHeader,
  getExampleData,
  getProfileData,
  getProfileIdData,
  getOrdersData,
  getDSData,
  postData,
  putData,
  deleteData,
  getProductsData,
  search,
};
