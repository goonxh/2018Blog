const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 发送留言接口
router.post('/api/message/sendMes',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newMessage = new models.message({
        name : req.body.name,
        content : req.body.content,
        email : req.body.email
    });
    // 保存数据newAccount数据进mongoDB
    newMessage.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('successed');
        }
    });
});
// 获取已有账号接口
/*router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
*/

module.exports = router;