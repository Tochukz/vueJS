const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

const people = [
    {name:'Chichi', job:'Teacher', city:'Lagos'},
    {name:'Tochukwu', job:'Developer', city:'Cape Town'},
    {name:'Anthonia', job:'Teacher', city:'Lagos'},
    {name:'Chukwudi', job:'Doctor', city:'Kaduna'},
    {name:'Cooper', job:'Lecturer', city:'Johannesburg'},
    {name:'Briam', job:'Student', city:'Durban'},
];

app.get('/', (req, res, next) => {
    res.send('Welcome');
});

app.get('/get-people', (req, res, next) => {
    //For query parameter: /my-site.com?search=value
    if (req.query.search && req.query.search == 'people') {
        res.json(people);
    }
    res.send('No search specified');
});

app.get('/get-people/:search', (req, res, next) => {
    //For url parameter: /my-site.com/:seachParam
    if (req.params.search && req.params.search == 'people') {
        res.json(people);
    }
    res.send('No parameter specified')
});

app.listen(app.get('port'), () => {
    console.log(`Serve running on localhost:${app.get('port')}`)
});