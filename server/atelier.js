const axios = require('axios');
const config = require('../config');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const getProductById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getProductStylesById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}/styles`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getReviewsById = (id, sort) => {
  const options = {
    url: `${baseURL}/reviews/`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: id,
      sort,
      count: 1000,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getMetaReviewsById = (id) => {
  const options = {
    url: `${baseURL}/reviews/meta/`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: id,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getRelatedProductsById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}/related`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const reportAnswer = (answerId) => {
  const options = {
    method: 'put',
    url: `${baseURL}/qa/answers/${answerId}/report`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getQuestions = (id) => {
  const options = {
    method: 'get',
    url: `${baseURL}/qa/questions`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: id,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  getProductById,
  getProductStylesById,
  getReviewsById,
  getMetaReviewsById,
  getRelatedProductsById,
  reportAnswer,
  getQuestions,
};
