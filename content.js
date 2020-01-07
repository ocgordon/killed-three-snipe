// Get tweets from feed.
var elements = document.getElementsByClassName('css-1dbjc4n r-my5ep6 r-qklmqi r-1adg3ll');

console.log(elements);

// Iterate through tweets and add snipe murders.
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  console.log('Made it to the loop!');
  var text = element[i].innerText;
  var replacedText = text + ' Killed three snipe.';

  if (replacedText !== text) {
    element[i].innerText = replacedText;
  }
}
