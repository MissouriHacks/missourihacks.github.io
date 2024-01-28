
/* FAQ ACCORDIAN */
var acc = document.getElementsByClassName("faq-link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var desc = this.nextElementSibling; /* gets the next element, aka the description component */
    if (desc.style.maxHeight == desc.scrollHeight + "px") {
       /* close down */
        desc.style.maxHeight = "0px";
    } else {
        /* open up */
        desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}

function Register() {
  alert("Registration is currently closed. If you have any questions, send them to hacks@missouri.edu.");
}