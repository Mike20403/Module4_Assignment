// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.

(function () {
  /* body... */
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

 
for (name in names) {
  var firstLetter = names[name].charAt(0);
  // console.log(firstLetter);
  var name2 = names[name];
  if (firstLetter.toLowerCase() === 'j') {
 
    byeSpeaker.speak(name2);
  } else {
    
    helloSpeaker.speak(name2);
  }
}

})();


