const models = require('./db');
const express = require('express');
const router = express.Router();

router.post('/api/todolist', (req, res) => {
    let newTodoList = new models.todolist({
        user : req.body.user,
        content : req.body.content,
        time : req.body.time
    });
    models.todolist.find({time: req.body.time, user: req.body.user}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            if(data.length === 0) {
                // 保存
                newTodoList.save((err,data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('save successed');
                    }
                }); 
            } else {
                // 更新
                models.todolist.update({time: req.body.time, user: req.body.user},
                    {$set:{content:req.body.content}}, (err,data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('update successed');
                    }
                });
            };
        }
    })
})

router.get('/api/todolist', (req, res) => {
    if (req.query.type === 'today') {
        models.todolist.find({time: req.query.time, user: req.query.user}, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    } else {
        models.todolist.find({user: req.query.user}, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }
})
module.exports = router;