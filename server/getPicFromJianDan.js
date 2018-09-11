/**
 * Created by goonxh on 2018/9/10.
 */
const express = require('express');
//const router = express.Router();
const path = require('path');
let http = require("http");
let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");
/*let i = 0;*/
//let url = "http://jandan.net/top-ooxx/";
//let url = "http://blog.xiehao.online/archives/";


// 定义网络爬虫的目标地址：自如友家的主页
let url = 'http://www.ziroom.com/';

http.get(url, function(res) {
    let html = '';
    // 获取页面数据
    res.on('data', function(data) {
        html += data;
    });
    // 数据获取结束
    res.on('end', function() {
        // 通过过滤页面信息获取实际需求的轮播图信息
        let slideListData = filterSlideList(html);
        // 打印信息
        printInfo(slideListData);
    });
}).on('error', function() {
    console.log('获取数据出错！');
});

/* 过滤页面信息 */
function filterSlideList(html) {
    if (html) {
        // 沿用JQuery风格，定义$
        let $ = cheerio.load(html);
        // 根据id获取轮播图列表信息
        let slideList = $('#foucsSlideList');
        //console.log(slideList)
        // 轮播图数据
        let slideListData = [];

        /* 轮播图列表信息遍历 */
        slideList.find('li').each(function(item) {

            let pic = $(this);
            // 找到a标签并获取href属性
            let pic_href = pic.find('a').attr('href');
            // 找到a标签的子标签img并获取_src
            let pic_src = pic.find('a').children('img').attr('_src');
            // 找到a标签的子标签img并获取alt
            let pic_message = pic.find('a').children('img').attr('alt');
            // 向数组插入数据
            slideListData.push({
                pic_href : pic_href,
                pic_message : pic_message,
                pic_src : pic_src
            });
        });
        // 返回轮播图列表信息
        return slideListData;
    } else {
        console.log('无数据传入！');
    }
}

/* 打印信息 */
function printInfo(slideListData) {
    // 计数
    let count = 0;
    // 遍历信息列表
    slideListData.forEach(function(item) {
        // 获取图片
        let pic_src = item.pic_src;
        // 获取图片对应的链接地址
        let pic_href = item.pic_href;
        // 获取图片信息
        let pic_message = item.pic_message;
        // 打印信息
        console.log('第' + (++count) + '个轮播图');
        console.log(pic_message);
        console.log(pic_href);
        console.log(pic_src);
        let firstIndex = pic_src.lastIndexOf("/")+1;
        let lastIndex = pic_src.lastIndexOf(".");
        console.log(lastIndex)
        let dirname = pic_src.substring(firstIndex,lastIndex);
        console.log(dirname)
        //fs.mkdirSync(`../dist/static/img/${dirname}`);
        request(pic_src).pipe(fs.createWriteStream(path.join(`../dist/static/img`,`${dirname}.jpg`)));
        console.log('\n');
    });
}

/*
const dirname = 'uploadImages'
const hostdir = "../dist/static/"

function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
  return false
}*/
