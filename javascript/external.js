// user_name = window.prompt("Please enter your name", "Type your name here");
// var headerElement = document.querySelector("#header h1");
// headerElement.textContent = "Hello, welcome " + user_name;
// Webmap Data Arrays
const wm_names = [
    "Oil Spill Toolkit",
    "Texas Ecosystems Analytical Mapper"
];

const wm_links = [
    "https://texas.gov",
    "http://texas.gov"
];
const wm_paragraphs = [
    "The oil spill toolkit developed by Enterprise Technology Solutions is neat.",
    "The Texas Parks and Wildlife's Landscape Ecology program is great."
];
const webmaps = [
    [wm_names[0], wm_links[0], wm_paragraphs[0]],
    [wm_names[1], wm_links[1], wm_paragraphs[1]]
];
function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
function webmap_table()
{
  document.write("<table width=100%>");
for (var row=0; row < webmaps.length; row++)
{
document.write("<tr>");
for (var column=0; column < webmaps[0].length; column++)
{
document.write("<td>" + webmaps[row][column] + "</td>");
}
document.write("</tr>");
}
document.write("</table>");
return "";
}
