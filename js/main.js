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

function controlData(n){
	switch(n){
		case "on":
		    $("profileForm").style.display = "none";
		    $("deleteData").style.display = "inline";
		    $("display").style.display = "none";
		    $("new").style.display = "inline";
		    break;
		case "off":
		    $("profileForm").style.display = "block";
		    $("deleteData").style.display = "inline";
		    $("display").style.display = "inline";
		    $("new").style.display = "none";
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
		var moreOptionsLi = document.createElement("li");
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
			makeSubList.appendChild(moreOptionsLi);
		}
		makeMoreOptions(localStorage.key(i), moreOptionsLi);
	}
}
function makeMoreOptions(key, moreOptionsLi){
	var editOptions = document.createElement("a");
	editOptions.href = "#";
	editOptions.key = key;
	var editData = "Edit Profile";
	editOptions.addEventListener("click", editMoreOptions);
	editOptions.innerHTML = editData;
	moreOptionsLi.appendChild(editOptions);

	var breaks = document.createElement("Br");
	moreOptionsLi.appendChild(breaks);

	var deleteOptions = document.createElement("a");
	deleteOptions.href = "#";
	deleteOptions.key = key;
	var deleteUserText = "Delete Profile";
	// deleteOptions.addEventListener("click", deleteMoreOptions);
	deleteOptions.innerHTML = deleteUserText;
	moreOptionsLi.appendChild(deleteOptions);

}
function editMoreOptions(){
       var inputValues = localStorage.getItem(this.key);
       var item = JSON.parse(inputValues);

       controlData("off");

       $("groups").value = item.group[1];
       $("fname").value = item.fname[1];
       $("lname").value = item.lname[1];
       $("pword").value = item.pword[1];
       $("mail").value  = item.mail[1];
       $("adss").value = item.adss [1];
       $("adds").value = item.adds[1];
       $("cit").value  = item.cit[1];      
       $("ste").value  = item.ste[1];
       $("zip").value  = item.zip[1];
       var radioButtons = document.forms[0].gender;
       for(var i=0; i<radioButtons.length; i++){
       	   if(radioButtons[i].value == "Male" && item.gender[1] == "Male"){
       	   	}else if(radioButtons[i].value == "Female" && item.gender[1] == "Female"){
             radioButtons[i].setAttribute("checked", "checked");       	  
       	    }
      
       }
       $("slide").value = item.slide[1];
       $("dateSelected").value = item.dateSelected[1];
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

   
        




