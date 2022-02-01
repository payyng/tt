const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our homepage')
        res.end()
    }
    if (req.url === '/about') {
        res.write('Learn more about us')
        res.end()
    }
    if (req.url === '/contact') {
        res.end('Feel free to contact us via email')
    }
    res.end(`oops`)
})

server.listen(5000)