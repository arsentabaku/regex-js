const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/i
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
