// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

document.ready(function(){
    
    var userChoice = "";
    var computerChoice = "";
    var winner = ""; 
    
    var randomNumber = Math.random(); 
    
    var randomNumberGenerator =  Math.random() ;
    
    if (.75 < randomNumber){
        var computerChoice = rock;
    } else if (.35 < randomNumber < .75) {
        var computerChoice = paper;
    } else  {
      var computerChoice = scissors; 
    }
    
$('#button-1').click(function() {
    $("#user").text( $("#c").val() )
});

})