const axios = require('axios');

const fetchData = (requestBodydata, url) =>{
  const headers = {
    'Content-Type': 'application/json'
  };
  const options = {
    method: 'POST',
    headers: headers,
    data: requestBodydata
  };

  return axios(url, options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

module.exports = { fetchData };
