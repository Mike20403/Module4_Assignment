
(function (window) {
  /* body... */
  var byeSpeaker = {}
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);

}
  window.byeSpeaker = byeSpeaker;
})(window);
