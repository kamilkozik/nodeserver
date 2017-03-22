var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestsHandlers');

var handle = {};
handle["/"] = requestHandlers.index;

server.start(router.route, handle);
