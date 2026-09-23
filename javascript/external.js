// user_name = window.prompt("Please enter your name", "Type your name here");
// var headerElement = document.querySelector("#header h1");
// headerElement.textContent = "Hello, welcome " + user_name;
var webmaps =
[
  ["Google Maps", "https://www.google.com/maps", "The primary focus of this
consumer-focused web mapping application is to help users navigate and explore
their physical surroundings. It offers geocoding and proximity analysis in terms
of GIS functionality within the app. It was designed for general use, being
widely used by many people in the world."],
  ["USGS National Map Viewer", "https://apps.nationalmap.gov/viewer/", "The
primary focus of this government operated GIS web application is to provide the
public with access to geospatial data and topographic information for the
United States. It offers a variety of GIS tools such as 3D elevation profile
analysis, buffer tools, and external data integration. It was designed for
researchers, land managers, and scientists but it is widely used by the public
as well, such as hikers or surveyors."]
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
