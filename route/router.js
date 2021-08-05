const express = require('express')
const route = express.Router();
const handle = require('../wheelhandler/Handle')

route.route('/')
    .get((req, res) => {
        res.send("/test 접속에 성공하였습니다");
    })

route.route('/test')
    .get(handle.Handle)

module.exports = route;