const names = ["Jen", "Ihor" , "Mark", "Jack"];

// for (var i = 0; i < names.length; i++) {
//     var name = names[i];
//     alert(name);
// }
//
// alert("this is outside of the FOR loop");
//
//
// while (names.length > 0) {
//     var element = names.pop();
//     alert(element);
// }
//
// alert("this is outside of the WHILE loop");


do {
    var element1 = names.pop();
    alert(element1);
} while (names.length > 0);

alert("this is outside of the DO - WHILE loop");
