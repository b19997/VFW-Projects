window.addEventListener("DOMContentLoaded", function(){
     

	function $(x){
		var list = document.getElementById(x);
		return list;
	}

function groupCreate(){
	var formTag = document.getElementsByTagName("form"),
	    selectLi = $("choose"),
	    makeSelect = document.createElement("select");
	    makeSelect.setAttribute("id", "groups");
	for(var i=0, j=profileGroups.length; i < j; i++){
		var makeOption = document.createElement("option");
		var optText = profileGroups[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	} 
	selectLi.appendChild(makeSelect);   
}
function getRadioButton(){
	var radios = document.forms[0].gender;
	for(var i=0; i<radios.length; i++){
		if(radios[i].checked){
           genderValue = radios[i].value
		}
	}
}

function controlsData(n){
	switch(n){
		case "on":
		    $("profileForm").style.display = "none";
		    $("deleteData").style.display = "inline";
		    $("viewData").style.display = "inline";
		    $("newProfile").style.display = "inline";
		    break;
		case "off":
		    $("profileForm").style.display = "block";
		    $("deleteData").style.display = "inline";
		    $("displayLink").style.display = "inline";
		    $("newProfile").style.display = "none";
		    $("items").style.display = "none";
		    break;
		default:
		    return false;          
	}
}

function storeData(){
	var id = Math.floor(Math.random()*100000001);
	getRadioButton();
	var item          ={};
	    item.group    =["Group", $("groups").value];
	    item.fname    =["First Name", $("fname").value];  
	    item.lname    =["Last Name", $("lname").value]; 
	    item.pword    =["Password", $("pword").value]; 
	    item.mail    =["Email", $("mail").value]; 
	    item.adss    =["Address Line 1", $("adss").value]; 
	    item.adds    =["Address Line 2", $("adds").value]; 
	    item.cit    =["City", $("cit").value]; 
	    item.ste    =["State", $("ste").value]; 
	    item.zip    =["Zip Code", $("zip").value];
	    item.gender   =["Gender", genderValue];   
	    item.slide    =["Age", $("slide").value]; 
	    item.dateSelected    =["Date Added", $("dateSelected").value]; 

	    localStorage.setItem(id, JSON.stringify(item));
	    alert("Profile Saved") 
}

function previewData(){
	controlData("on");
	if(localStorage.length === 0){
		alert("There is nothing to preview");
	}
	var makeDiv = document.createElement("div");
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	$("items").style.display = "display";
	for(var i=0, len=localStorage.length; i<len;i++){
		var makeLi = document.createElement("li");
		makeList.appendChild(makeLi);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var object = JSON.parse(value);
		var makeSubList = document.createElement("ul");
		makeLi.appendChild(makeSubList);
		for(var n in object){
			var makeSubLi = document.createElement("ul");
			makeSubList.appendChild(makeSubLi);
			var optSubText = object[n][0]+" "+object[n][1];
			makeSubLi.innerHTML = optSubText;
		}
	}
}

function clearData(){
	if(localStorage.length === 0){
		alert("Storage is Empty.") 
	}else{
		localStorage.clear()
		alert("Profiles have been deleted")
		window.location.reload();
		return false;
	}
}

var profileGroups = ["--Choose Profile--", "Proffessional", "Social", "Recreational"];
groupCreate();



	var seeData = $("display");
	display.addEventListener("click", previewData);
	var clearStorage = $("deleteData");
	deleteData.addEventListener("click", clearData);
	var saveData = $("submiting");
	submiting.addEventListener("click", storeData);





});
function updateSlider(slideAmount) {

var display = document.getElementById("selected");

display.innerHTML=slideAmount;
};

   
        




