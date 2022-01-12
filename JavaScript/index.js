
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



/* Case Study Navigation */

function open_map() {
    var x = document.getElementById("map");
      if (x.className === "map") {
        x.className += " open";
      } else {
        x.className = "map";
      }   
  }
  
  
  const sections = document.querySelectorAll("section");
  const subsections = document.querySelectorAll("subsection");
  const windowHeight = window.innerHeight;
  
  const sectionNavigation = document.querySelector(".sectionMap");
  const subsectionNavigation = document.querySelector(".subsectionMap");
  
  
  // section indicators / navigation
  
  function sectionReset() {
    for (var i = 0; i < sectionNavigation.children.length; i++) {
      sectionNavigation.children[i].classList.remove("selected");
    }
  }
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    sections.forEach(function(section, i) {
      if (section.offsetTop < scrollTop + windowHeight/2) {
        sectionReset();
        sectionNavigation.children[i].classList.add("selected");
      }  
    });
  });
  
  
  document.querySelectorAll(".sectionMap li").forEach(function(item, i) {
    item.addEventListener("click", function() {
      var elem = document.getElementById("S"+[i]);
      elem.scrollIntoView();
       
    })
  });
  
  
  // subsection indicators / navigation
  
  function subsectionReset() {
    for (var i = 0; i < subsectionNavigation.children.length; i++) {
      subsectionNavigation.children[i].classList.remove("selected");
    }
  }
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    subsections.forEach(function(subsection, i) {
      if (subsection.offsetTop < scrollTop + windowHeight/2) {
        subsectionReset();
        subsectionNavigation.children[i].classList.add("selected");
      }  
    });
  });
  
  
  document.querySelectorAll(".subsectionMap li").forEach(function(item, i) {
    item.addEventListener("click", function() {
      var elem = document.getElementById("ss"+[i]);
      elem.scrollIntoView();
       
    })
  });




