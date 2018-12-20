const axios = require('axios');
const vocabularyUrl = 'http://localhost:3000/vocabulary';
var random = require('lodash/random');

// Make a request for a user with a given ID
axios.get(vocabularyUrl)
  .then(function (response) {
    // handle success
    const vocabularyLength = response.data.length;
    let randomIndex = random(vocabularyLength)

    console.log(response.data[randomIndex].jp);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
