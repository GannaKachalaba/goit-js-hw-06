const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("change", onfontSizeControl);

function onfontSizeControl(event) {
    refs.fontSizeControl.range = event.currentTarget.value;
    refs.spanText.style.fontSize = `${event.target.value}px`;
    console.log(refs.spanText.textContent);
}