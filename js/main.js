var jsLibrary = $('#js-library')
var URL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

var generateWord = function() {

  $.ajax(URL)
   .done(function(data) {
     var word = data.word
     jsLibrary.html(word + '.js')
   })
}

$(document).ready(function() {
  $('#gererateLibrary').on('click', function() {
    generateWord();
  })
})
