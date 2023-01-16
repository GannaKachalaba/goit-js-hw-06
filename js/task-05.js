const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  spanOutput.textContent = event.currentTarget.value;
  console.log(spanOutput);
});
