

/* Scroll Projects Function */

function scrollProjects() {
    var elem = document.getElementById("projectsSection");
    elem.scrollIntoView();
}

function open_navMenu() {
    var x = document.getElementById("navMenu");
        if  (x.className === "navMenu") {
            x.className += " responsive";
        }   else {
            x.className = "navMenu";
        }

}

function open_dropdownContent () {
    var x = document.getElementById("dropdown-content");
        if (x.className === "dropdown-content") {
            x.className += " responsive";
        }   else {
            x.className = "dropdown-content";
        }
}




