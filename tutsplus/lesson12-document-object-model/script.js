// (function () {
//
//     var pElements = document.getElementsByTagName("p"); // NodeList object, live representation
//     lastElement = pElements[pElements - 1];
//
//
//     for (var i = 0, l = pElements.length; i < l; i++) {
//         alert(pElements[i]);
//
//     }
// }());


// (function () {
//
//     var pElements = document.getElementById("foo");
//     alert(pElements);
//
// }());


(function () {

    var pElements = document.querySelectorAll("div p");
    alert(pElements.length);

}());