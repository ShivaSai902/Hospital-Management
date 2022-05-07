const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

})

router.post('/contact', (req, res) => {
    console.log(req.body)
    console.log('sex')
    res.json({
    done:'yes'})
})

router.post('/book', (req, res) => {

})

module.exports = router;