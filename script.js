$(document).ready(function(){

var userWord;

//function to store the word the user needs to guess and create the empty letter spots
$('#wordBtn').click(function(){
  userWord = $('#userWord').val();
  for(var i = 1; i <= userWord.length; i++){
  $('#wordZone').append('<p class="letter" id="space' + i + '">  </p>');
  console.log(userWord + ' ' + i);
  $('#userWord').val('');
}

$('#guessBtn').click(function(){

//clears the guess
  $('#guessWord').val('');
}
})


//Closing out document.ready
})
