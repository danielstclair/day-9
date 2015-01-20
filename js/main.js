// #1 Answer
function random1(values) {
	return values[Math.floor(Math.random() * 9)];
}

var values1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(random1(values1));







// #2, #3 & #4 Answer

String.prototype.rotate = function(number){
    var newString = this.toString();
    var n = number;
    n = n%newString.length;
    if(n<0){n= -n;}else{n = newString.length -n;}
    return newString.substr(n) + newString.substr(0,n);
};

var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var rot13 = function(str, num){
	var alphLow = (alph+alph.toLowerCase()).split("");
	var startN = (alph.rotate(num)+alph.rotate(num).toLowerCase()).split("");
	var rot13_dict= {};

	alphLow.forEach(function(cv,index){rot13_dict[cv] = startN[index];});

	var rot13_map = function(z){
	return rot13_dict[z] || z;
	};

	return str.split("").map(rot13_map).join("");
	// call by entering rot13("your text", number of your choice);
};







// Number 5
students = new Array("Daniel", "Erika", "Jacob", "Paul", "Alex", "Hugh", "Gabe", "Charlie", "Travis", "Ryan")    
console.log(students);
function getStudent() {
    var random = Math.floor(Math.random() * students.length);
    return students.splice(random, 1)[0]; 
};
pair = new Array(getStudent(), getStudent());
var studentsLeft = students;

console.log(pair);
console.log(studentsLeft)

while (studentsLeft.length > 2){
	getStudent();
	var newPair = new Array(getStudent(), getStudent())
	console.log(newPair);
	console.log(studentsLeft)
}







// Number 6
function dash(string) {
	return string.split("").join("-");
};







// Number 7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function dash2(string) {
	return string.slice("-");
};







// number 8
function dash2(string, string2) {
	var both = string + "-" + string2
	return both;
}




