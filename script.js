$(document).ready(function() {

  var userWord;

  //function to store the word the user needs to guess and create the empty letter spots
  $('#wordBtn').click(function() {
    userWord = $('#userWord').val().toUpperCase();
    for (var i = 0; i < userWord.length; i++) {
      $('#wordZone').append('<p class="letter" id="space' + i + '">  </p>');
      console.log(userWord + ' ' + i);
      $('#userWord').val('');
    }
    $("#userWord").prop('disabled', true);
  })

  //function to check guess against the actual correct word.  If it is correct, the code exexcutes to place the letter on the correct <p>

  $('#letterBtn').click(function() {
    var guess = $('#userLetter').val().toUpperCase();
    var guessCorrect = false;

    // checks if guess matches any letters in the word
    for (var i = 0; i <= userWord.length; i++) {
      if (userWord.charAt(i) == guess) {
        guessCorrect = true;
      }
    }
    // if a letter matches, this loops through to put it on the GUI in the right spot
    if (guessCorrect) {
      for (var y = 0; y <= userWord.length; y++) {
        if (userWord.charAt(y) == guess) {
          $('p#space' + y).text(guess)
        }
      }

    } else {
      $('#wrongZone').append('<span>' + guess + '</span>')
    }
    //clears the guess
    $('#userLetter').val('');
  })


  //Closing out document.ready
})
