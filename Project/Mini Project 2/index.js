// Back to Top Button Logic

// Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Form Validation Logic

var u_name = document.myForm.u_name;
var u_email = document.myForm.u_email;
var u_subject = document.myForm.u_subject;

function validateForm() {
  if (u_name.value) {
    u_name.classList.remove("is-invalid");
    u_name.classList.add("is-valid");
    document.getElementById("name-validation").innerText = "";
  } else {
    u_name.classList.remove("is-valid");
    u_name.classList.add("is-invalid");
    document.getElementById("name-validation").innerText =
      "Name field is required";
  }

  if (u_email.value) {
    u_email.classList.remove("is-invalid");
    u_email.classList.add("is-valid");
    document.getElementById("email-validation").innerText = "";
  } else {
    u_email.classList.remove("is-valid");
    u_email.classList.add("is-invalid");
    document.getElementById("email-validation").innerText =
      "Email field is required";
  }

  if (u_subject.value) {
    u_subject.classList.remove("is-invalid");
    u_subject.classList.add("is-valid");
    document.getElementById("subject-validation").innerText = "";
  } else {
    u_subject.classList.remove("is-valid");
    u_subject.classList.add("is-invalid");
    document.getElementById("subject-validation").innerText =
      "Subject field is required";
  }
}
