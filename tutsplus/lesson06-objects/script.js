var obj = "This is a string object.",
    length = obj.length; // 24

var index = obj.indexOf("is"); // 2
var index2 = obj.indexOf("is", index + 1); // 5
var index3 = obj.indexOf("this"); // -1

var lastIndex = obj.lastIndexOf("is"); // 5
var lastIndex2 = obj.lastIndexOf("is", lastIndex - 1); // 2

var substr = obj.substr(0, 4); // This

var index4 = obj.indexOf("st"); // 10
var substr2 = obj.substr(index4, 6); // string

var newString = obj.replace("object", "value"); // This is a string value

var upperCase = obj.toUpperCase(),
    lowerCase = obj.toLowerCase();

alert(length);
alert(index);
alert(index2);
alert(index3);

alert(lastIndex);
alert(lastIndex2);

alert(substr);
alert(substr2);

alert(newString);
alert(obj);

alert(upperCase);
alert(lowerCase);
alert(obj);
