const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.send({
      name:'Andrew',
      likes: [
        'Jelly',
        'McD',
        'Philly'
      ]
  });
});

app.get('/about',(req,res) => {
  res.send('About page');
});

app.get('/bad',(req,res) => {
  res.send({
    error:'Oops something went wrong'
  });
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
