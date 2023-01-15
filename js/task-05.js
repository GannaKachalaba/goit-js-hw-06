const refs = {
    textInput: document.querySelector("#name-input"),
    spanOutput: document.querySelector('span#name-output'),
};

refs.textInput.addEventListener("textInput", onTextInputListener);

function onTextInputListener(event) {
    if (event.currentTarget.value === "") {
      refs.spanOutput.textContent = "Anonymous";
    }
    else {
        refs.spanOutput.textContent = event.currentTarget.value;
     }
};




