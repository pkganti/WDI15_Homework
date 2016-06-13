
var lines = {
	"N": ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	"L": ['8th', '6th', 'Union Square', '3rd', '1st'],
	"6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

//Function to find the index of the stations
var stationIndex = function(line, station){
	var index = lines[line].indexOf(station);
	if(index===-1){
		console.log("Station "+station+" not found on line"+line);
	}
	else{
		return index;
	}
}

//Plan trip function to calculate the stops from line to line based on the user input.

var planTrip = function(line1, station1, line2, station2){
	var myStops = [];
	if(line1===line2 && station1===station2){
		console.log("Wake up !!! You are at your destination")
	}
	else if(line1===line2){
		var boardingAt = parseInt(stationIndex(line1, station1));
		var getDownAt = parseInt(stationIndex(line2, station2));

		if(boardingAt<getDownAt){
			console.log("You must travel through the following stops on the "+line1+" line");
			// console.log(lines.line1[boardingAt]);
			for(var i=boardingAt; i<=getDownAt; i++){
				myStops.push(lines[line1][i]);
			}
			console.log(myStops.join(','));
		}
		else{

			console.log("You must travel through the following stops on the "+line1+" line");
			for(var j=boardingAt; j>=getDownAt; j--){
				myStops.push(lines[line1][j]);
			}
			console.log(myStops.join(','));
		}
	}

	else{
		planTrip(line1, station1, line1, 'Union Square');
		console.log("Change the train at Union Square");
		planTrip(line2, 'Union Square', line2, station2);
	}
}
