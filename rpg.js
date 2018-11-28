/* This is a starter with examples.  Remove the examples once you have made your own versions. */


// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
    // if (answer == "Think some more") {
    //    thinkSomeMore();
    // } 
    //  else if (answer == "spin in a circle") {
    //    spinInCircle();
    // }
}

function theMan(){
	story("You are wandering along a sidewalk at midnight in near pitchblack with only streetlights illuminating the path that you have chosen. You have plenty of time that you would want to waste but out of the corner of your eye you see a shadown of a man leaning against a building asking you to go talk with him. What do you want to do?");
	choices = ["Walk Away", "Walk to him", "Call the police"];
	answer = setOptions(choices);
}




/* function forest() {  // HOW TO SET A SCENE
 * story("There is a house made of candy\
 * \nThere is a fruit vender\
 * \nThere is a small opening in the trees with a ring of mushroom in the middle");
 * 
 * choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
 * answer = setOptions(choices);
 *    
 * }
 */ 
 
