$ (document).ready( onReady );

function onReady(){
    console.log('JQuery working');
    getTestData();
    $('#addPerson').on('click', addPerson)
    
}

function addPerson(){
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: {
            name : 'Alan'
        }
    }).then(function(response){
        console.log(response)
        getTestData();
    }).catch(function(error){
        alert('ERROR IN POST')
    })
        
    }


function getTestData(){
    console.log('in getTestData');
    //AJAX GET call to /tester
    $.ajax({
       type: 'GET',
       url: '/tester' 
    }).then (function (response){
        console.log( 'back from server with:', response );
        //append to DOM
        appendToDom(response);
    }).catch( function(err){
        alert("problem! check console");
        console.log( err );
        // the .then .catch pattern is called 'a promise' we don't know how long it will take to get the ajax request back but we know it will come back.
    })
    
}

function appendToDom(listOfPeople){
    $('#personList').empty();
    for(let person of listOfPeople){
    //target UL, add each person to DOM
    $('#personList').append(`<li>${person}</li>`)
}
}