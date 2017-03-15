module.exports = function(error, req, res, next) {
    /*TODO:: fix senHttpError "TypeError: is not a function"*/
    res.sendHttpError = function(error) {

        res.status(error.status);
        if (res.req.headers['x-requested-with'] == 'XMLHttpRequest') {
            res.json(error);
        } else {
            res.render("./error", {error: error});
        }
    };

    next();

};



