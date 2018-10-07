/*var foo = new Array(11, "hello", true);

var lenth = foo.length;
var value = foo[0];
foo[0] = 12;
foo[1] = 13;
// 12, 13, true*/

var foo = [11, "hello", true];
foo[3] = 15;
foo[4] = "5th value";
foo[foo.length]="a new value";
foo[foo.length]="one more new value";
foo.push("one more more new value");

alert(foo);




var names = ["Jeremy", "Jeffrey"],
    names2 = ["Jennifer", "Jackie"];

var people = names.concat(names2); // combine in a larger array

var joined = people.join("@"); // concatenates all the elements with specific separator

var reversed = people.reverse();

var sorted = people.sort();

alert(people);
alert(joined);
alert(reversed);
alert(sorted);
