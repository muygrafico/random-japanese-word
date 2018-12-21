const axios = require('axios');
const vocabularyUrl = 'http://localhost:3000/vocabulary';
const random = require('lodash/random');
const exec = require('child_process').exec

// Make a request for a user with a given ID
axios.get(vocabularyUrl)
  .then(function (response) {
    // handle success
    const vocabularyLength = response.data.length;
    let randomIndex = random(vocabularyLength)
    let word = response.data[randomIndex].jp;
    console.log(word);
    exec(`say -v kyoko -r 100 ${word}`, (err, stdout, stderr) => console.log(stdout))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
