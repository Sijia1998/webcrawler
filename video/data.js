const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const mkdirp = require('mkdirp');
// const http = require('http');

//目标网站
request('https://mp.mmb44.top/uploads/mp4/2017111422090748599427.mp4?end=60').pipe(fs.createWriteStream('av1.avi'))
request('https://mp.mmb44.top/uploads/mp4/201711131383376703280.mp4?end=60').pipe(fs.createWriteStream('av2.avi'))
request('https://mmb44.top/uploads/201705193114467424208.mp4?end=60').pipe(fs.createWriteStream('av3.avi'))
request('https://mmb44.top/uploads/201712921361894957651.mp4?end=60').pipe(fs.createWriteStream('av4.avi'))