const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const mkdirp = require('mkdirp');
// const http = require('http');

//目标网站
let url = 'http://meizhiwang.lofter.com/?page=2&t=1372593406117'

//本地存储目录
let dir = './image'
//创建目录
mkdirp(dir,(err)=>{
    if(err){
        console.log(err);
    }
});

//下载方法
let download = (url,dir,filename)=>{
    request.head(url,(err,res,body)=>{
        request(url).pipe(fs.createWriteStream(dir + '/' + filename))
    })
}


//发送请求
request(url,(err,res,body)=>{
    if(!err&&res.statusCode === 200){
        let $ = cheerio.load(body);
        $('.boxin img').each((index,item)=>{
            let src = $(item).attr('src');
            console.log('正在下载' + src);
            download(src,dir,Math.floor(Math.random()*100000)+src.substr(-4,4));
            console.log('下载完成');
            
        })
    }
})


// let server = http.createServer((req, response) => {

//     let getNewsList = (done) => {
//         let news = new Array();
//         request('http://www.cnblogs.com', (err, res, data) => {
//             if (err) {
//                 return console.error(err);
//             } else {
//                 let $ = cheerio.load(data);
//                 let navText = $('.post_nav_block').html()
//                 console.log(navText);
//                 response.end(navText);
//             }
//         })
//     }
//     getNewsList();
    
// })
// server.listen(8080);


