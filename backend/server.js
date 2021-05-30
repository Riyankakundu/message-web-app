var express = require('express');
var app = express();

var messages = [{text: 'Hello', owner: 'Tim'}, {text: 'Hi', owner: 'Jane'}];

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var results = messages.filter(message => message.owner == user);
    res.json(results);
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

app.use('/api', api);
app.listen(63145);