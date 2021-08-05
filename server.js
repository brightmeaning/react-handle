const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/router');


//router 작동 확인
/*app.get('/', (err, res) => {
    res.send("/: 서버에 접속하였습니다");
})*/

app.use(router)

app.listen(port, err => {
    if(err) alert(err);
    else console.log("서버가 가동되었습니다")
});