const request = require('request');
const fs = require('fs');

let query = fs.readFileSync('./ql.graphql');
let formed = JSON.stringify(query.toString());

let q = {
    "query": "{ user(login: \"scolsen\"){ avatarUrl \n repositories { totalCount  } }}"
}

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
