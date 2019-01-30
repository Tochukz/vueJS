const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send('Hello API');
});
app.get('/get-books', (req, res, next) => {
    const books = [
        {
          "id": 15,
          "title": "Engineering Physics",
          "author": "Dr Rakesh Dogra",
          "price": 3100,
          "img": "15.jpg"
        },
        {
          "id": 93,
          "title": "Functions of Matrices",
          "author": "Nicholas J. Higham",
          "price": 1280,
          "img": "93.jpg"
        },
        {
          "id": 86,
          "title": "Mathematical Logic",
          "author": "Stephen Cole Keelne",
          "price": 1450,
          "img": "86.jpg"
        },
        {
          "id": 73,
          "title": "Structural Geology",
          "author": "Marland P. Billings",
          "price": 1780,
          "img": "73.jpg"
        },
        {
          "id": 92,
          "title": "Mathematical Method For Physics and Engineering",
          "author": "K.F. Reley et al..",
          "price": 1450,
          "img": "92.jpg"
        },
        {
          "id": 91,
          "title": "How to Think Like a Mathematician",
          "author": "Kelvin Houston",
          "price": 1270,
          "img": "91.jpg"
        }
      ];

      res.jsonp(books);
});

app.listen(app.get('port'), () => {
    console.log(`Server running at localhost:${app.get('port')}`);
});
