var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//Data for API below
var hobbies = {hobbies:["Computers", "Games", "Reading"]};
var occs = {occupations:["Car Detailer", "Grocery Stocker", "Electrial Estimator"]};
var mentions = {mentions:[]};
var friends = {friends:[]};
var skills = [{id: 1, name: "javascript", experience: "beginner"}];
//====================================================

app.use(bodyParser());

app.get('/', function(req, res){
	res.send('Hello World');
});

//GET name
app.get('/name', function(req, res){
	res.send({name: "Houston Warnick"})
});

//GET location
app.get('/location', function(req, res){
	res.send({location: "Orem, UT"})
});

//GET mentions
app.get('/mentions'), function(req, res){
	if(req.query.order === 'asc'){
		res.send(mentions.mentions.sort())
	}
	else if(req.query.order === 'desc'){
		res.send(mentions.mentions.sort().reverse())
	}
	else
		res.send(mentions)
}

//GET friends
app.get('/friends'), function(req, res){
	if(req.query.order === 'asc'){
		res.send(friends.friends.sort())
	}
	else if(req.query.order === 'desc'){
		res.send(friends.friends.sort().reverse())
	}
	else
		res.send(friends)
}

//GET hobbies
app.get('/hobbies', function(req, res){
	if(req.query.order === 'asc'){
		res.send(hobbies.hobbies.sort())
	}
	else if(req.query.order === 'desc'){
		res.send(hobbies.hobbies.sort().reverse())
	}
	else 
		res.send(hobbies)
});

//GET Occupations
app.get('/occupations', function(req, res){
	if(req.query.order === 'asc'){
		res.send(occs.occupations.sort())
	}
	else if(req.query.order === 'desc'){
		res.send(occs.occupations.sort().reverse())
	}
	else 
		res.send(occs)
});

//GET Occupations/latest
app.get('/occupations/latest', function(req, res){
	res.send(JSON.stringify(occs.occupations[occs.occupations.length-1]))
});

//POST friends
app.post('/friends', function(req, res){
	friends.friends.push(req.body.friend)
	res.send(friends)
})

//POST mentions
app.post('/mentions', function(req, res){
	mentions.mentions.push(req.body.mention)
	res.send(mentions)
})

//CRUD for skills
app.get('/skills', function(req, res){
	res.send(skills);
})

app.get('/skills/:id',function(req, res){
    var specificSkill = {};
    for(var i = 0; i < skills.length; i++){
      if(skills[i].id.toString() === req.params.id){
      	console.log(skills[i]);
      	specificSkill = skills[i];
      }  
    }
	res.send(specificSkill);
})

//start server
var server = app.listen(8989, function(){
	console.log('Listening on port %d', server.address().port);
})