const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-zA-Z\d]{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/i,
  slug: /^[a-z\d-]{8,20}$/,
};

function addEventListenersToFormElements() {
  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      addClassToTheFieldBasedOnValidityOfUserInput(
        e.target,
        patterns[e.target.attributes.name.value]
      );
    });
  });
}

function addClassToTheFieldBasedOnValidityOfUserInput(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

addEventListenersToFormElements();
