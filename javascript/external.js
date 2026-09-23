// user_name = window.prompt("Please enter your name", "Type your name here");
// var headerElement = document.querySelector("#header h1");
// headerElement.textContent = "Hello, welcome " + user_name;
// Webmap Data Arrays
const wm_names = [
    "Google Maps",
    "USGS National Map Viewer"
];

const wm_links = [
    "https://www.google.com/maps",
    "https://apps.nationalmap.gov/viewer/"
];
const wm_paragraphs = [
    "The primary focus of this consumer-focused web mapping application is to
    help users navigate and explore their physical surroundings.",
    "The primary focus of this government operated GIS web application is to
    provide the public with access to geospatial data and topographic
     information."

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
