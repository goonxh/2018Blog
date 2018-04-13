const request = require('request');
const fs = require('fs');
const path = require('path');
 
request.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=-1&n=1&mkt=zh-CN', (error, response, body) => {   
    const img = JSON.parse(body).images[0];
    request('https://cn.bing.com'+img.url).pipe(fs.createWriteStream(path.join('../src/assets', "bingPic.jpg")));
    console.log(`ok!`);
});