var quotes = [
  "Take your time, recharge, and come back stronger!",
  "Become a priority in your life.", 
  "Dream BIG, work HARD, stay FOCUSED, and surround yourself with good people.",
  "When you feel like quitting, think about why you started.",
  "Make some goals, organize your week, and stay focused",
  "Develop self-disipline. Do what needs to be done, even if you don't want to do it.",
  "The difference between who you are and who you want to be is what you do.",
  "Be bold enough to design your own life.",
  "Confidence is power.",
  "Wake up with positive intentions to better yourself and the lives of those around you.",
  "Create the things you wish existed.",
  "Turn your pain into power, and visons into victory!",
  "The comeback is always stronger than the setback.",
  "Strive for progress, not perfection!",
  "Dream hard, work harder!"
]

function generateQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuote').innerHTML = quotes[randomQuote];
  document.getElementById('tweetThis').href="https://twitter.com/intent/tweet/?text=" + quotes[randomQuote];
}
