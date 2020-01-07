//Ensure DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {
  // Get tweets from feed.
  var tweets = document.getElementsByClassName(
    'css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0',
  );

  console.log(tweets);
  console.log(tweets.length);

  // Iterate through tweets and add snipe murders.
  function killSnipe() {
    for (var i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];
      console.log('Made it to the loop!');
      tweet.innerHTML = tweet[i].innerHTML + 'Killed three snipe.';
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
});

// Tweet Classes
// css-1dbjc4n r-my5ep6 r-qklmqi r-1adg3ll
// css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0
