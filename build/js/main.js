var generateWord = function() {
  var jsLibrary = $('#js-library')
  var URL = "http://www.setgetgo.com/randomword/get.php"

  $.ajax(URL)
   .done(function(word) {
     jsLibrary.html(word + '.js')
   })
}

$(document).ready(function() {
  $('#gererateLibrary').on('click', function() {
    generateWord();
  })
})
