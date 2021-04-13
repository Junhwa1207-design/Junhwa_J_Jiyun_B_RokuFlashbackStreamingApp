const express = require('express');
const router = express.Router();

// this is where we would add our middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware( {
    target: 'http://localhost:5000', //server #
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))


router.use('/ums', createProxyMiddleware( {
    target: 'http://localhost:5000', //server #
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))


router.get('/', (req, res) => {
    res.render('index', {message: "Hello from handlebars!" })

})


router.get('/channel', (req, res) => {
    res.render('channel', {message: "Hello from handlebars!" })

})

router.get('/kids', (req, res) => {
    res.render('kids', {message: "Hello from handlebars!" })

})

router.get('/music', (req, res) => {
    res.render('music', {message: "Hello from handlebars!" })

})

router.get('/signIn', (req, res) => {
    res.render('signIn', {message: "Hello from handlebars!" })

})



// other routes you might use
router.use ((req, res) =>{
    res.status(404);
    res.render("error",
    { layout: "errorLayout.hbs", errormessage: `you have lost your way! "${req.url}" does not exist!`});
})

module.exports = router;
