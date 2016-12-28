'use strict';

var express = require('express'),
  // NOTE: require in our request proxy module

  port = process.env.PORT || 3000,
  app = express();

// NOTE: now use our proxy within a function to request
//        our github data on the server.


app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
