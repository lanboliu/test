function start(request, response, logger) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("start was called!");
    response.end();
}

function upload(request, response, logger) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("upload was called!");
    response.end();
}

exports.start = start;
exports.upload = upload;
