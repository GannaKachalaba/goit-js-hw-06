 const textInput = document.querySelector("#name-input");
 const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onTextInputListener);
  
function onTextInputListener(event) {
  if (event.currentTarget.value === "") {
    spanOutput.textContent = "Anonymous";
  } else {
    spanOutput.textContent = event.currentTarget.value;
  }
}


