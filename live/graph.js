const request = require('request');
const fs = require('fs');

let query = fs.readFileSync('./ql.graphql');
let formed = JSON.stringify(query.toString());

let q; //let's build a graphql query!

const opts = {
    url:'https://api.github.com/graphql',
    proxy: 'http://proxy',
    method: 'POST',
    json: true,
    body: q,
    headers: {
        'User-Agent': 'request'
    },
    auth: {
        user: 'scolsen',
        pass: 'password'
    }
};

request(opts, (err, res, body)=>{console.log(body);});
