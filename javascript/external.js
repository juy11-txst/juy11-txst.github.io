// user_name = window.prompt("Please enter your name", "Type your name here");
// var headerElement = document.querySelector("#header h1");
// headerElement.textContent = "Hello, welcome " + user_name;
function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
document.write(welcome());
