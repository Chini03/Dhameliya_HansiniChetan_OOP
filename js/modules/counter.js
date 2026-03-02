export class Counter {
    // widget count factory = name in the header
    
    constructor(selector, intialValue = 0) {

        this.count = intialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        // add buttons, decrement, reset

        // set button text
        this.button.textContent = "Increment";

        // append the display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);

        // Add event listener
        this.button.addEventListener("click", ()=> this.increment());

        // when the first gets mounted, update the display
        this.update();
    }

    // state methods
    increment() {
        this.count++;
        this.update();
    }

    update() {
        // set initial display content
        this.display.textContent = `Count: ${this.count}`;
    }
}