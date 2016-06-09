var rectangle = {
	length: 4,
	width: 4
}
var triangle = {
	side1: 9,
	side2: 5,
	side3: 6
}

//This function checks if the rectangle is square or not

var isSquare = function(shape){

	if(shape.length===shape.width){
			console.log("The rectangle is a square");
	}
	else{
			console.log("The rectangle is not a square");
	}
}

//This function calculates the area of rectangle

var area = function(shape){
		console.log("Area of the rectangle is: "+(shape.length * shape.width));
}

//This function calculates the perimeter of rectangle

var perimeter = function(shape){
	console.log("Perimeter of the rectangle is: "+ 2*(shape.length + shape.width));
}

//This function checks whether the triangle is equilateral or not

var isEquilateral = function(shape){

	if((shape.side1===shape.side2)&&(shape.side1===shape.side3)){
		console.log("Triangle is an equilateral triangle");
		return true;
	}
	else{
		console.log("Triangle is not equilateral");
		return false;
	}
}

//This function checks whether the triangle is isoceles or not

var isIsoceles = function(shape){
		if((shape.side1===shape.side2)||(shape.side2===shape.side3)||(shape.side3===shape.side1)){
			console.log("The triangle is Isoceles");
		}
		else{
			console.log("It is not Isoceles");
		}
}

//This function checks whether the triangle is obtuse or not

var isObtuse = function(shape){
	var myList = [];
	myList.push(shape.side1);
	myList.push(shape.side2);
	myList.push(shape.side3);
	myList.sort();

	if((myList[2]*myList[2])>((myList[1]*myList[1])+(myList[0]*myList[0]))){
		console.log("The triangle is Obtuse");
	}
	else{
		console.log("The triangle is not Obtuse");
	}

}

//This function checks whether the triangle is obtuse or not

var areaOfTriangle = function(shape){
	var peri = (shape.side1+shape.side2+shape.side3)/2;
	var totalArea = Math.sqrt(peri*(peri-shape.side1)*(peri-shape.side2)*(peri-shape.side3));
	console.log( "The area is: "+totalArea);
}

//This is the function which internally calls all the other functions based on the type of shape

var properties = function(shape){
	if(shape==='rectangle')
	{
		isSquare(shape);
		area(shape);
		perimeter(shape);
	}
	else{
		isEquilateral(shape);
		isObtuse(shape);
		areaOfTriangle(shape);
		isIsoceles(shape);
	}
}
