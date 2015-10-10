var config = require(./config.js);

app.use(function(err,req,res,next){
    res.send(err.status, err.message);
})

module.exports = app;