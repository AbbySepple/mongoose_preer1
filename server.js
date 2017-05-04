var express = require('express');
var mongoose = require('mongoose');
var Gem = require('./models/user');
var bodyParser = require('body-parser');

var app = express;
app.user(bodyParser.jason());

mongoose.connect('mogodb://localhost:27017/mongoosePeerOne');

app.get('/user', function(req, res){
  Gem.find({}, function(err, gemResults){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('gemResults ->', gemResults);
      res.send(gemResults);
    }
  });//end of gem.find
});//end of app.get

app.post('/user', function(req, res){
  console.log('in gems post ->', req.body);

var newGem = new Gem ({
    name: req.body.name,
    gem_type: req.body.gem_type,
    est_val: req.body.est_val,
    rare: req.body.rare,
    date_collected: req.body.date_collected,
});

newGem.save(function(err) {
  if(err){
    console.log(err);
    res.sendStatus(500);
  }else{
    console.log('new user created');
    res.sendStatus(201);
  }
});
});//end newGem

app.listen(3004, function(){
  console.log('listening on 3004');
});
