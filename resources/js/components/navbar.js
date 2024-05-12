function myNavBar() {
	let lista = document.getElementById("navBarLista")
	lista.classList.toggle('hideShowBtn')
}



//=========== NAV TAB ACTIVE

// Get the container element
let btnContainer = document.getElementsByClassName('nav-tab-menu')[0];

// Get all buttons with class="navTabBtn" inside the container
let btns = btnContainer.getElementsByClassName("navTabBtn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {

	btns[i].addEventListener("click", function() {

		var current = document.getElementsByClassName("activeTabBtn");
		
		current[0].className = current[0].className.replace(" activeTabBtn", "");
		this.className += " activeTabBtn";
	});
}