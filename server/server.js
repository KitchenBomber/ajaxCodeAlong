// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// global variables
const port = 5000; 
//uses
app.use( bodyParser.urlencoded({extended : true}));
app.use( express.static( 'server/public') );
// spin up a server
app.listen( port, ()=>{
    console.log( 'server is up on ', port );
}) //end server up
const people = ['Heather', 'Heather', 'Halima'];
 
// get route
app.get ( '/tester', (req, res) =>{
    console.log('in /tester GET');
    res.send( people );
    
})

app.post ( '/tester', (req, res) => {
    console.log('got to POST /tester', req.body );
    people.push(req.body.name);
    console.log(people);
    
    res.send('woof');
})