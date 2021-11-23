

/* Scroll Projects Function */

function scrollProjects() {
    var elem = document.getElementById("projectsSection");
    elem.scrollIntoView();
}



/* Open/Close Hamburger Menu */

function open_navMenu() {
    var x = document.getElementById("navMenu");
        if  (x.className === "navMenu") {
            x.className += " responsive";
        }   else {
            x.className = "navMenu";
        }

}


/* Open/Close Dropdown Content */

function open_dropdownContent() {
    var x = document.getElementById("dropdown-content");
        if (x.className === "dropdown-content") {
            x.className += " responsive";
        }   else {
            x.className = "dropdown-content";
        }
}

function close_dropdownContent() {
    var x = document.getElementById("dropdown-content");
        if (x.className === "dropdown-content responsive") {
            x.className -= " responsive";
        }   else {
            x.className = "dropdown-content responsive";
        }
}

function reverse_arrow() {
    var x = document.getElementById("caret");
        if (x.className === "fa fa-caret-down") {
            x.className += " reverse";
        }   else {
            x.className = "fa fa-caret-down";
        } 
}



/* Hamburger Menu navIcon ANIMATION */

function animate_navIcon() {
    var x = document.getElementById("navIcon");
        if (x.className === "navIcon") {
            x.className += " open";
        }   else {
                x.className = "navIcon"
            }
}








