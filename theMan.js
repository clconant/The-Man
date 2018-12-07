/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'

// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
     if (answer == "Walk Away") {
        cornerOfTheBuilding();
     } 
	else if (answer=="Walk To Him") {
		policeShowUp();
	}
    else if (answer == "Call The Police") {
        walkingToTheBack();
	}
	else if (answer == "Go home") {
		 cornerOfTheBuilding();
	}
	else if (answer == "Run into the forest") {
		 runIntoTheForest();
	}
	else if (answer == "Run into the building") {
		 blackOut();
	}
	else if (answer == "Act like you know the man") {
		 discoverTheMan();
	}
	else if (answer == "Run into the forest") {
		 runIntoTheForest();
	}
	/*else if (answer == "") {
		 ();
	}
	else if (answer == "") {
		 ();
	}*/
}


//Discover the Man 1.1
function theMan(){
	story("You are wandering along a sidewalk at midnight in near pitch black with only streetlights illuminating the path that you have chosen. You have plenty of time that you would want to waste but out of the corner of your eye you see a shadow of a man leaning against a building asking you to go talk with him. What do you want to do?");
	choices = ["Walk Away", "Walk to him", "Call the police"];
	answer = setOptions(choices);
}
//Corner Of Building 1.2
function cornerOfTheBuilding(){
	story("You decide to go talk with the creepy guy that told you to come over to him at midnight while you were walking, he stares you down as you slowly approach towards him and escape the streetlights illumination.");
	choices = ["Go home", "Run into the forest", "Run into the building"];
	answer = setOptions(choices);
}
//Police Show up 1.3
function policeShowUp(){
	story("You chose to talk with the guy HOW WISE, you guys have a good 30 minute conversation about your favorite sports teams and the sports you like the best before the cops show up");
	choices = ["Act like you know the guy", "Wake up from a dream", "Have a nightmare of the man"];
	answer = setOptions(choices);
}
//Walking to the back 1.4
function walkingToTheBack(){
	story("The guy starts walking away and you follow him around to the back of the building where there's no cameras or light.");
	choices = ["Run away", "Fight him", "Call the police"];
	answer = setOptions(choices);
}

//Getting Dragged away 1.5
function gettingDraggedAway(){
	story("The guy out of the middle of nowhere hits you to the ground and while you are dazed he starts to drag you");
	choices = ["Throw up","Pass out","Grab something from the ground"];
	answer = setOptions(choices);
}
//Run into the forest 1.6
function runIntoTheForest(){
	story("You get sketched out from the guy acting strange all of a sudden so you just start running as fast as you can towards the only cover you'll have to get away from him");
	choices = ["Trip over a tree root","Go back","Call the police"];
	answer = setOptions(choices);
}
//Black out 1.7
function blackOut(){
	story("You became so overwhelmed with everything around you that was happening that you get really dizzy and just go numb and can't remember anything that happened within the last 2 hours");
	choices = ["Have a nightmare of the man","Go home","Wake up in your bed"];
	answer = setOptions(choices);
}
//Waking Up In A Dumpster 1.8
function wakingUpInADumpster(){
	story("You wake up in a dumpster randomly and freak out sending you into a panic almost immediately, you find that you’re behind a building with the man standing next to it.");
	choices = ["Call the police","Go home","Search around you"];
	answer = setOptions(choices);
}
//Observe The Area 1.9
function observeTheArea(){
	story("You quickly observe the area for any danger close by or anything that would harm you and you see flashing lights in the distant by a dense forest.");
	choices = ["Wake up","Pass out","Laugh it away"];
	answer = setOptions(choices);
}
//Wake up in your bed
function wakeUpInYourBed(){
	story("");
	choices = ["Go back to bed","Your mom drags you out of bed","Run into the nearest forest"];
	answer = setOptions(choices);
}

