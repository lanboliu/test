function route(handle, pathname, logger, request, response) {
    if (typeof handle[pathname] == "function") {
        handle[pathname](request, response, logger);
    } else{
        logger.error("No request handler found for " + pathname);
    }
}

exports.route = route;
