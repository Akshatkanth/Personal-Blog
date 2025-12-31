const express = require('express');
const router = express.Router();
const Post = require('../models/POST')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

/*
Post
Admin - Register
*/

router.post('/admin/register', async(req, res)=>{
    try {

        const{ username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({ username, password:hashedPassword });
            res.status(201).json({message: 'user created', user});
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({ message: 'User already in use' });
            }
            res.status(500).json({message:'internal server error'})
        }
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;