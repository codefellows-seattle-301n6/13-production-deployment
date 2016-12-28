'use strict';

var express = require('express')
  // NOTE: require in our request proxy module
var requestProxy = require('express-request-proxy')
var port = process.env.PORT || 3000
var app = express();
// NOTE: now use our proxy within a function to request
//        our github data on the server.


app.use(express.static('./'));

app.get('/github/*', function(request, response) {
  console.log('New request:', request.url);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response)
})

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: '.'})
})

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
