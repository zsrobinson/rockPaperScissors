var wins = 0;
var ties = 0;
var loses = 0;

updateTotals();

function rps(human) {
	//human choice
	console.log("human choice: "+human);

	//comp choice
	var compRandom = Math.floor(Math.random() * 3) + 1;
	if (compRandom == 1) { var comp = "r"; }
	if (compRandom == 2) { var comp = "p"; }
	if (compRandom == 3) { var comp = "s"; }
	console.log("computer choice: "+comp)

	//determines output
	if (human==comp) {
		ties += 1;
		var output = "tied";
	} else if ((human=="p"&&comp=="r")||(human=="s"&&comp=="p")||(human=="r"&&comp=="s")) {
		wins += 1;
		var output = "won";
	} else if ((human=="s"&&comp=="r")||(human=="r"&&comp=="p")||(human=="p"&&comp=="s")) {
		loses += 1;
		var output = "lost";
	}
	console.log("you "+output);

	//emoji
	var humanEmoji = emoji(human);
	var compEmoji = emoji(comp);
	function emoji(input) {
		if (input=="r") { return "🗿"; }
		else if (input=="p") { return "📃"; }
		else { return "✂️"; }
	}
	console.log(humanEmoji,compEmoji)

	//output
	console.log("\n")
	setText("humanInput",humanEmoji);
	setText("compInput","");
	setText("output","")
	setTimeout(function( ) {
		updateTotals();
		setText("compInput",compEmoji);
		setText("output",output)
	}, 500);
}

function updateTotals() {
	setText("winsOutput",wins);
	setText("tiesOutput",ties);
	setText("losesOutput",loses);
}

function setText(id,text) {
	document.getElementById(id).innerHTML = text;
}