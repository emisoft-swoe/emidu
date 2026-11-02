require('http').createServer((req, res)=>res.end(require('fs').readFileSync('./text.html', {encoding:'utf-8'}))).listen(process.env.port);
