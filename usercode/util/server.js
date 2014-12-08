var http = require("http"),
    url = require("url");
var fs = require('fs');

function start(route, handle, logger, nodeid, port) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        logger.error("Request for " + pathname + " received at " + nodeid);

        route(handle, pathname, logger, request, response);
    }

    http.createServer(onRequest).listen(port);
}

exports.start = start;
