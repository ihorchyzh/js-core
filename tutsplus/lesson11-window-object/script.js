(function() {

if (confirm("Do you want to go to Google.com?")) {
    location = "http://www.google.com";
} else {
    alert("You'll stay here");
    
}
    
}());

// immediately invoked functions, not defined in global scope, protected.
// Window variants:
// alert();
// confirm();
// promt();