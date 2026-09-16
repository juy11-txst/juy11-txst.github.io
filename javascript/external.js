user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
var headerElement = document.querySelector("#header h1");
headerElement.textContent = "Hello, welcome " + user_name;
