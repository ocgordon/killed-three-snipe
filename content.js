// Get tweets from feed.
var tweets = document.getElementsByClassName(
  'css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0',
);

console.log(tweets);

// Iterate through tweets and add snipe murders.
function killSnipe() {
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    console.log('Made it to the loop!');
    tweets[i].innerHTML = tweets[i].innerHTML + 'Killed three snipe.';
  }
}

var observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    killSnipe();
  });
});

const config = {
  characterData: true,
  subtree: true,
};

observer.observe(document, config);
