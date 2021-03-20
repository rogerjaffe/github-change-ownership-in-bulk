const USER = '<username>';
const PER_PAGE = 10;        // Number of results to show in a query, max=100
const PAGE = 1;             // Page numbers start at 1

const config = require('./config.js');
const fetch = require('node-fetch');

let url = 'https://api.github.com/users/' + USER + '/repos' + '?per_page=' + PER_PAGE + '&page=' + PAGE;

fetch(url, {
  method: 'GET',
  headers: {
    "Authorization": 'token ' + config.token,
    "Content-Type": "application/json",
    "Accept": 'application/vnd.github.v3+json',
    'User-Agent': 'github-transfer-repos-in-bulk'
  },
  json: true
})
.then(response => response.json())
.then(data => {
  data.map(repo => console.log(repo.name));
})
