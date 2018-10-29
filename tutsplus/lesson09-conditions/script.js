var foo = "6" == 6; // Sting and a number, converts to the same type > true

var foo2 = "6" === 6; // Sting and a number, identity operator checks the same type and value > true


if (5 < 6) {
    alert("5 is less than 6");
} else {
    alert("This is the else block");
}

alert("This is outside of the if statement");

// if (condition) {
//     code
// } else if (condition) {
//     code
// } else {
//     code
// }
// logical AND > &&, OR > ||, NOT > !value
// 0 > false, 1,2,3... > true

var foo1 = null; // false, undefined

if (foo1) {
    alert("hi");
}

alert(typeof null);