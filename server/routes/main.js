const express = require('express');
const router = express.Router();

//routes
router.get('', (req, res) => {
    const locals = {
        title : "Blog Website",
        description : "Blog website made using node js, express and mongodb"
    }
    res.render('index', {locals})
});
router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;