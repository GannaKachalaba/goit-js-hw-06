const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decremBtn = document.querySelector("[data-action='decrement']");
const incremBtn = document.querySelector("[data-action='increment']");
const spanElem = document.querySelector("[id='value']");


decremBtn.addEventListener("click", function () {
    counter.decrement();
    spanElem.textContent = counter.value;
});

incremBtn.addEventListener("click", function () {
    counter.increment();
    spanElem.textContent = counter.value;
});


