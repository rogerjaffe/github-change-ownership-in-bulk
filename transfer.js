const config = require('./config.js');
const fetch = require('node-fetch');
const Promise = require('bluebird');

const FROM = '<move-from-here>';
const TO = '<move-to-here>';
const REPOS = [
  'repo1',
  'repo2',
  'repo3'
]

Promise.map(REPOS, function(repo) {
  return Promise.try(function() {
    const url = 'https://api.github.com/repos/' + FROM + '/' + repo + '/transfer';
    const body = {
      "new_owner": TO,
        "team_ids": []
    };
    return fetch(url, {
      method: 'POST',
      headers: {
        "Authorization": 'token '+config.token,
        "Content-Type" : "application/json",
        "Accept": 'application/vnd.github.v3+json',
        'User-Agent': 'github-transfer-repos-in-bulk'
      },
      body: JSON.stringify(body),
      json: true
    });
  })
    .then(obj => {
      console.log(obj)
    });
})
  .then(function() {
    console.log('Done');
  });
