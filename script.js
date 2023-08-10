const email = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
console.log(errorMsg);

email.addEventListener("change", validateEmail);

function validateEmail() {
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (email.value.match(regx)) {
    email.classList.remove("input-error");
    errorMsg.style.visibility = "hidden";
  } else {
    email.classList.add("input-error");
    errorMsg.style.visibility = "visible";
  }
}
