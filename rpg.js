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
	story("You are wandering along a sidewalk at midnight in near pitch black with only streetlights illuminating the path that you have chosen. You have plenty of time that you would want to waste but out of the corner of your eye you see a shadow of a man leaning against a building asking you to go talk with him. What do you want to do?");
	choices = ["Walk Away", "Walk to him", "Call the police"];
	answer = setOptions(choices);
}

function cornerOfTheBuilding(){
	story("You decide to go talk with the creepy guy that told you to come over to him at midnight while you were walking, he stares you down as you slowly approach towards him and escape the streetlights illumination.");
	choices = ["Go home", "Run into the forest", "Run into the building"];
	answer = setOptions(choices);
}

function policeShowUp(){
	story("You chose to talk with the guy HOW WISE, you guys have a good 30 minute conversation about your favorite sports teams and the sports you like the best before the cops show up");
	choices = ["Act like you know the guy", "Wake up from a dream", "Have a nightmare of the man"];
	answer = setOptions(choices);
}

function walkingToTheBack(){
	story("The guy starts walking away and you follow him around to the back of the building where there's no cameras or light.");
	choices = ["Run away", "Fight him", "Call the police"];
	answer = setOptions(choices);
}

function gettingDraggedAway(){
	story("The guy out of the middle of nowhere hits you to the ground and while you are dazed he starts to drag you");
	choices = ["Throw up","Pass out","Grab something from the ground"];
	answer = setOptions(choices);
}

function runIntoTheForest(){
	story("You get sketched out from the guy acting strange all of a sudden so you just start running as fast as you can towards the only cover you'll have to get away from him");
	choices = ["Trip over a tree root","Go back","Call the police"];
	answer = setOptions(choices);
}

function blackOut(){
	story("You became so overwhelmed with everything around you that was happening that you get really dizzy and just go numb and can't remember anything that happened within the last 2 hours");
	choices = ["Have a nightmare of the man","Go home","Wake up in your bed"];
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
 
