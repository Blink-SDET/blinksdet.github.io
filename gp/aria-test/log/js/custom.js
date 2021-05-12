
function ARIA_Marquee() {
  var txt = document.createTextNode(" " + Math.random() + " Text has been added to the marquee.");
  document.getElementById('myMarquee').appendChild(txt); 
}

function ARIA_Overwrite_Log() {
	document.getElementById('livelog2').innerHTML = " " + Math.random( ) + ": another new line has been written over writing the current line.";
}

function ARIA_Append_Log() {
  var txt = document.createTextNode( " " + Math.random() + " A line has been appended.");
  document.getElementById('livelog1').appendChild(txt); 
}

function ARIA_Role_Key(event,URL) {
	if((event.keyCode == 13) || (event.keyCode == 32)){
		alert("Press Escape to exit.\nURL = " + URL);
	}
}


function ARIA_Checkbox_Key(event) {
	if((event.keyCode == 13) || (event.keyCode == 32)){
		ARIA_Checkbox();
	}
}


function ARIA_Checkbox() {
	var getvalue=document.getElementById("ARIA_Checkbox").getAttribute("aria-checked");
	if (getvalue=="false")
	{
		document.getElementById("ARIA_Checkbox").setAttribute("aria-checked", "true");
		document.getElementById('checkbox_alert').innerHTML = "aria-checked has been set to true.";
	} else {
		document.getElementById("ARIA_Checkbox").setAttribute("aria-checked", "false");
		document.getElementById('checkbox_alert').innerHTML = "aria-checked has been set to false.";
	}
}


function ARIA_Button_Key(event) {
	if(event.keyCode == 13){
		ARIA_Button()
	}
}

function ARIA_Button() {
	var getvalue=document.getElementById("ARIA_button").getAttribute("aria-pressed");
	if (getvalue=="false")
	{
		document.getElementById("ARIA_button").setAttribute("aria-pressed", "true");
		document.getElementById('button_alert').innerHTML = "aria-pressed has been set to true.";
	} else {
		document.getElementById("ARIA_button").setAttribute("aria-pressed", "false");
		document.getElementById('button_alert').innerHTML = "aria-pressed has been set to false.";
	}
}

function ARIA_AlertDialogOn() {
	document.getElementById("alert").setAttribute("class","not_hidden");
	document.getElementById("alert").setAttribute("aria-hidden","false");
	document.getElementById("close").focus();
}
function ARIA_AlertDialogOff() {
	document.getElementById("alert").setAttribute("class","hidden");
	document.getElementById("alert").setAttribute("aria-hidden","true");
	document.getElementById("alertButton").focus();
}

function ARIA_Hidden_Toggle() {
	// Get the current class either hidden or not_hidden
	var getvalue=document.getElementById("ARIA_content").getAttribute("aria-hidden");
	if (getvalue=="false")
	{
		// Set Image
		document.getElementById("arrow").setAttribute("src", "http://www.donaldevans.com/images/right_arrow.png");
		// Set the aria-label
		document.getElementById("myButton").setAttribute("aria-label","Drawer Collapsed. Click to expand.");
		// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("aria-expanded","false");
		// Set the Class to hidden
		document.getElementById("ARIA_content").setAttribute("aria-hidden","true");
		// Move Focus back to button
		document.getElementById("myButton").focus();
	} else {
	// Set Image
		document.getElementById("arrow").setAttribute("src","http://www.donaldevans.com/images/down_arrow.jpg");
		// Set the aria-label
		document.getElementById("myButton").setAttribute("aria-label","Drawer Expanded.  Click to collapse.");
		// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("aria-expanded" , "true");
		// Set the Class to hidden
		document.getElementById("ARIA_content").setAttribute("aria-hidden","false");
		// Move Focus to content
		document.getElementById("hTag").focus();
	}
}

function ARIA_HideShow(e) {
	// Get the current class either hidden or not_hidden
	var getvalue=document.getElementById("ARIA_content").getAttribute("class");
	if (getvalue=="not_hidden")
	{
		// Set Image
		document.getElementById("arrow").setAttribute("src", "http://www.donaldevans.com/images/right_arrow.png");
		// Set the aria-label
		document.getElementById("myButton").setAttribute("aria-label","Drawer Collapsed. Click to expand.");
		// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("aria-expanded","false");
		// Set the Class to hidden
		document.getElementById("ARIA_content").setAttribute("class","hidden");
		// Move Focus back to button
		document.getElementById("myButton").focus();
	} else {
	// Set Image
		document.getElementById("arrow").setAttribute("src","http://www.donaldevans.com/images/down_arrow.jpg");
		// Set the aria-label
		document.getElementById("myButton").setAttribute("aria-label","Drawer Expanded.  Click to collapse.");
		// Set the aria-expanded
		document.getElementById("ARIA_content").setAttribute("aria-expanded" , "true");
		// Set the Class to hidden
		document.getElementById("ARIA_content").setAttribute("class","not_hidden");
		// Move Focus to content
		document.getElementById("hTag").focus();
	}
}

function ARIA_Role_Alert_On() {
	document.getElementById('name_alert').innerHTML = 'Here is an error message!';
	document.getElementById('name_text').setAttribute('aria-invalid','true'); 
}

function ARIA_Role_Alert_Off() {
	document.getElementById('name_alert').innerHTML = '';
	document.getElementById('name_text').setAttribute('aria-invalid','false');
}
function ToggleClass() 
{ 
	for(i=1;i<93;i++) 
	{
		var hideID = "hide_" + i;
		try
		{
			if(document.getElementById(hideID).style.display=='none'){
				document.getElementById(hideID).style.display='';
			} else if(document.getElementById(hideID).style.display==''){ 
				document.getElementById(hideID).style.display='none';
			}		
		}
		catch (err)
		{
			/*alert(hideID);*/
		}
	}
} 

function draw(id) {
  var canvas = document.getElementById(id);
  if (canvas.getContext) {
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect (10, 10, 55, 50);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect (30, 30, 55, 50);
  }
}
function toggle(n)
{
	//alert('on');	
	if (n == 1) 
	{
		document.getElementById("n1").style.zIndex = 1;
	}
	else
	{
		document.getElementById("n1").style.zIndex = -1;
	}
}
