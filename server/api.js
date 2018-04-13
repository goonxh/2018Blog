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
        email : req.body.email,
        time : new Date().toLocaleString()
    });
    // 保存数据newMessage数据进mongoDB
    newMessage.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('successed');
        }
    });
});

// 获取留言接口
router.get('/api/message/getMes',(req,res) => {
    // 通过模型去查找数据库
    models.message.find((err,data) => {
        if (err) {
            res.send("0");
        } else {
            res.send(data);
        }
    });
});

//发送日常接口
router.post('/api/daily/sendDaily',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newDaily = new models.daily({
        content : req.body.content,
        time : new Date().toLocaleString()
    });
    // 保存数据newMessage数据进mongoDB
    newDaily.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('successed');
        }
    });
});

//获取最新日常接口
router.get('/api/daily/getDaily',(req,res) => {
    // 通过模型去查找数据库
    models.daily.find((err,data) => {
        if (err) {
            res.send("0");
        } else {
            /*console.log(data[data.length-1].content)*/
            res.send(data[data.length-1].content);
        }
    });
});
//获取所有日常接口
router.get('/api/daily/getADaily',(req,res) => {
    // 通过模型去查找数据库
    models.daily.find((err,data) => {
        if (err) {
            res.send("0");
        } else {
            res.send(data);
        }
    });
});


module.exports = router;