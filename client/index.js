const http = require('http');
const request = require('request');

request({'url':'https://api.github.com/', 'proxy': 'proxy-goes-here', 'headers': {
    'User-Agent': 'request'
}}, (err, res, body)=>{
   console.log(body); 
});
