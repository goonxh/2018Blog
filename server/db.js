// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
let options = {
	user:"xh",
	pass:"2012011234"
}
//远程连接
mongoose.connect('mongodb://47.106.141.98:27017/2018blog',options);
//本地连接
//mongoose.connect('mongodb://localhost/2018blog',options);
// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',(err) => console.log('Mongo connection error:'+err));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式 Schema**************/
const messageSchema = mongoose.Schema({
    name : String,
    content : String,
    email : String,
    time : String
});
const dailySchema = mongoose.Schema({
    content : String,
    time : String
});
const initSchema = mongoose.Schema({  //初始化数据表
    visit : String
});
/************** 定义模型Model **************/
const Models = {
    message : mongoose.model('message',messageSchema),
    daily : mongoose.model('daily',dailySchema),
    init : mongoose.model('init',initSchema)
}

/*const initModel=db.model("init",initSchema);
const initEntity = new initModel({
    visit : 0
})
initEntity.save(function(err,data){
    if(err){
        console.log("error :" + err);
    }else{
        console.log("successed")
    }
})*/
module.exports = Models;
