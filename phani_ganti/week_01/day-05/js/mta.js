var stations = [
	{Name:"LineN", Stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
	{Name:"LineL", Stops: ['8th', '6th', 'Union Square', '3rd', '1st']},
	{Name:"Line6", Stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
	]
	
//The below function will take the argument of line and returns the index of the line.

var triplines = function(line){
	for(var i=0; i<stations.length; i++){
		if(stations[i].Name===line){
			var index=i;
		}
	}

	return index;
}

//The below function will take the argument of line and returns the list of stations.

var tripstops = function(line){
	var index = triplines(line);
	var stationList = [];
	for(var j=0; j<stations[index].Stops.length; j++){
		stationList.push(stations[index].Stops[j]);
	}
	return stationList;
}

//The below function will take the argument line and point and return the index of the starting point

var ptStarting = function(line, point){
	var startingPoint;
	var listStops = tripstops(line);
	for(var i=0; i<listStops.length; i++){
		if(listStops[i]===point){
			startingPoint = i;
		}
	}
	return startingPoint;
}

//The below function will take the argument line and point and return the index of the ending point

var ptEnding = function(line, point){
	var endPoint;
	var listStops = tripstops(line);
	for(var i=0; i<listStops.length; i++){
		if(listStops[i]===point){
			endPoint = i;
		}
	}
	return endPoint;
}

//This function is the main function which takes the starting line, ending line, starting point and ending point to list out all the stations between them.

var planRouteTrip = function(startLine, startname, endLine, endName){

	var tripLine = triplines(startLine); //gives the index of trip line
	var tripStop = tripstops(startLine); // list of stations of the given line
	var totalStops=[];

	var startingAt = ptStarting(startLine, startname);
	var endingAt = ptEnding(endLine, endName);

	if((startname===endName)&&(startLine===endLine)){
		console.log("Wake up.... you are at your destination!!");
	}
	else if(startLine===endLine){
		if(startingAt>endingAt){
			for(var i=(startingAt)-1; i>=endingAt; i--){
				totalStops.push(tripStop[i]);
			}
		}
		else{
			for(var j=(startingAt)+1; j<=endingAt; j++){
				totalStops.push(tripStop[j]);
			}
		}
			return totalStops;
	}
	else
	{
		var stops1, stops2 = [];
		var intersection='Union Square';
		stops1 = planRouteTrip(startLine, startname, startLine, intersection);
		stops2 = planRouteTrip(endLine, intersection, endLine, endName);
		totalStops = stops1.concat(stops2);
		return totalStops;
	}
}

var planTrip = function(Line1, Source, Line2, Destination){

	var stops=planRouteTrip(Line1, Source, Line2, Destination);
	console.log("Your total stops for the trip are: "+stops.length);
	for(var k=0; k<stops.length; k++){
		console.log(stops[k]);
	}
}
