const express = require('express') 
const middleware = require('./middleware')

const server = express();
const path = require('path');
server.listen(3000);
console.log('Server running on port 3000');
server.use(express.static(path.join(__dirname, 'public')));
server.get('/', (req, res) => {
    res.render('index.html')
})
server.get('/ourservices.html', (req, res) => {
    res.render('ourservices.html')
})
server.get('/contactus.html', (req, res) => {
    res.render('contactus.html')
})
server.get('*', (req, res) => {
    res.send('404 NOT FOUND !')
})

server.use(middleware)

