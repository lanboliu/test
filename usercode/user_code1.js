var server = require("./util/server"),
    router = require("./util/router"),
    requestHandlers = require("./util/requestHandlers");

var logger = require('tracer').console({
                 transport : function(data) {
                     console.log(data.output);
                     var stream = fs.createWriteStream("./log/stream.log", {
                         flags: "a",
                         encoding: "utf8",
                         mode: 0666
                     }).write(data.output+"\n");
                 }
             });

var handle = {};

handle["/"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle, logger, "1", 8001);
