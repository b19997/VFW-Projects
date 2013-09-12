function updateSlider(slideAmount) {

var display = document.getElementById("selected");

display.innerHTML=slideAmount;
};
/* js Events
click
submit
blur
change
*/

// variables
var  myList= document.getElementById("myList");
var  fname= document.getElementById("fname");
var  lname= document.getElementById("lname");
var  pword= document.getElementById("pword");
var  mail= document.getElementById("mail");
var  adss= document.getElementById("adss");
var  cit= document.getElementById("cit");
var  ste= document.getElementById("ste");
var  zip= document.getElementById("zip");
var  male= document.getElementById("male");
var  fem= document.getElementById("fem");
var  slide= document.getElementById("slide");
var  dateSelected= document.getElementById("dateSelected");
var  notes= document.getElementById("notes");

/*var info = function(){
    myList

};*/


var color = document.getElementById("nextTwo");

var border = function(){
    color.setAttribute("class", "withFocus");


}
color.addEventListener("focus", border)
console.log(color);



;