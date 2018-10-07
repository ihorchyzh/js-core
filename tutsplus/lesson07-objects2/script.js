/*Functions:
Object  >>  toString();
String
Number
Boolean*/


var num = 8,
    str = num.toString(); // num + "" > "8"


/*var person = new Object();

person.firstName = "Jeremy";
person.lastName = "McPeak";
person.getFullName = function() {
    return this.firstName + " " + this.lastName;
};*/

// Object literal notation

var person = {
    firstName : "Jeremy",
    lastName : "McPeak",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

alert(person.getFullName());