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

// For Questions & Answers
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

const markAnswerHelpful = (answerId) => {
  const options = {
    method: 'put',
    url: `${baseURL}/qa/answers/${answerId}/helpful`,
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

const markReviewHelpful = async (reviewId) => {
  const options = {
    method: 'put',
    url: `${baseURL}/reviews/${reviewId}/helpful`,
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

const markQuestionHelpful = (questionId) => {
  const options = {
    method: 'put',
    url: `${baseURL}/qa/questions/${questionId}/helpful`,
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
      count: 50,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const postQuestion = (question, nickname, email, productId) => {
  const numProductId = Number(productId);

  const options = {
    method: 'post',
    url: `${baseURL}/qa/questions`,
    headers: {
      Authorization: config.TOKEN,
    },
    data: {
      body: question,
      name: nickname,
      email,
      product_id: numProductId,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const postAnswer = (answer, nickname, email, questionId) => {
  const options = {
    method: 'post',
    url: `${baseURL}/qa/questions/${questionId}/answers`,
    headers: {
      Authorization: config.TOKEN,
    },
    data: {
      body: answer,
      name: nickname,
      email,
      photos: [],
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
  markAnswerHelpful,
  markReviewHelpful,
  markQuestionHelpful,
  getQuestions,
  postQuestion,
  postAnswer,
};
