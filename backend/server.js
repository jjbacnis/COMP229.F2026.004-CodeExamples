var express = require('express');

var app = express();

function logger(req, res, next) {
   console.log(req.method, req.url);
   next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.send('Hello World');
}

function goodbyeWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.send('Goodbye World');
}

const temp = {
   name: 'John Smith',
   email: 'john.smith@example.com'
}

function getUser(req, res, next) {
   res.json(temp);
}

function notfound(req, res, next) {
   res.status(404).send('Error: Not Found');
}


app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use('/getuser', getUser);
app.get('/api/users/:id', (req, res, next) => {
   console.log("===> User ID: " + req.params.id);

   res.send("===> User ID: " + req.params.id);
})
app.use(notfound);

app.listen(3000);

console.log('Server running at http://localhost:3000/');