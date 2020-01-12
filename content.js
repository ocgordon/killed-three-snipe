//Ensure DOM is loaded.
// document.addEventListener('DOMContentLoaded', function() {
// Get tweets from feed.
var tweets
const snipeChance = 1
const snipeResponses = [
  ". Killed three snipe."
]

// Iterate through tweets and add snipe murders.
function killSnipe() {
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    tweet.classList.add("sniped");
    if (Math.random() < snipeChance) {
      tweet.innerHTML = tweet.innerHTML + snipeResponses[Math.floor(Math.random() * snipeResponses.length)];
    }
  }
}

var observer = new MutationObserver(mutations => {
  tweets = Array.prototype.slice.call(document.querySelectorAll('body > div > div > div > div > main > div > div > div > div > div > div > div > div > section > div > div > div >div > div > article > div > div > div > div > span:last-child'),0).filter((tweet) => {
    return !tweet.classList.contains("sniped")
  })
  mutations.forEach(mutation => {
    killSnipe();
  });
});

const config = {
  characterData: true,
  subtree: true,
};

observer.observe(document, config);
// });

// Tweet Classes
// css-1dbjc4n r-my5ep6 r-qklmqi r-1adg3ll
// css-901oao css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0
