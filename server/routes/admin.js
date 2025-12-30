const express = require('express');
const router = express.Router();
const Post = require('../models/POST')
const User = require('../models/User')


const adminLayout = '../views/layouts/admin';
/*
Get
Admin - Login Page
*/

router.get('/admin', async(req, res)=>{
    try {
        const locals = {
        title: "Admin",
        description : "Admin Page"
    }
    res.render('admin/index', {locals, layout:adminLayout});
    } catch (error) {
        console.log(error)
    }
});


/*
Post
Admin - Check Login
*/

router.post('/admin', async(req, res)=>{
    try {

        const{ username, password } = req.body;
        console.log(req.body);
        res.redirect('/admin')

    } catch (error) {
        console.log(error)
    }
});


module.exports = router;