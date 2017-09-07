$(document).ready(function() {

  var userWord;

  //function to store the word the user needs to guess and create the empty letter spots
  $('#wordBtn').click(function() {
    userWord = $('#userWord').val();
    for (var i = 1; i <= userWord.length; i++) {
      $('#wordZone').append('<p class="letter" id="space' + i + '">  </p>');
      console.log(userWord + ' ' + i);
      $('#userWord').val('');
    }
  })

  $('#letterBtn').click(function() {
    var guess = $('#userLetter').val();
    var guessCorrect = false;

    for(var i = 1; i <= userWord.length; i++){
      if (userWord.charAt(i) == guess){
        guessCorrect = true;
    }
}
    if(!guessCorrect){
      $('#wrongZone').append('<span>' + guess + '</span>')
    } else {
      // add to right spot in empty spaces
    }
    //clears the guess
    $('#userLetter').val('');
  })


  //Closing out document.ready
})
