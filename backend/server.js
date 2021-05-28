var express = require('express');
var app = express();

var messages = [{text: 'Hello', owner: 'Tim'}, {text: 'Hi', owner: 'Jane'}];

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.post('/message', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})


app.listen(1234);