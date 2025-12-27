const express = require('express');
const router = express.Router();
const Post = require('../models/POST')

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
    res.render('admin/index', {locals});
    } catch (error) {
        
    }
})



module.exports = router;