const email = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
console.log(errorMsg);
const form = document.querySelector(".form");
const signupCard = document.querySelector(".signup-card");
const signupSuccess = document.querySelector(".signup-success");
const dismissMsg = document.querySelector(".dismiss-msg");
const loginEmail = document.querySelector(".login-email");

// email.addEventListener("change", validateEmail);

function validateEmail() {
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (email.value.match(regx)) {
    email.classList.remove("input-error");
    errorMsg.style.visibility = "hidden";
    signupCard.style.display = "none";
    signupSuccess.style.display = "block";
    loginEmail.textContent = email.value;
    email.value = "";
  } else {
    email.classList.add("input-error");
    errorMsg.style.visibility = "visible";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

dismissMsg.addEventListener("click", () => {
  signupCard.style.display = "grid";
  signupSuccess.style.display = "none";
});
