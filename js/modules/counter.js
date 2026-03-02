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
        this.button2 = document.createElement("button");
        this.button3 = document.createElement("button");

        // add buttons, decrement, reset

        // set button text
        this.button.textContent = "Increment";
        this.button2.textContent = "Decrement";
        this.button3.textContent = "Reset";

        // append the display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);
        container.appendChild(this.button2);
        container.appendChild(this.button3);

        // Add event listener
        this.button.addEventListener("click", ()=> this.increment());
        this.button2.addEventListener("click", ()=> this.decrement());
        this.button3.addEventListener("click", ()=> this.reset());

        
        this.toggleInactive();
        // when the first gets mounted, update the display
        this.update();
    }

    toggleInactive() {

        if(this.count === 0) {
                this.button2.classList.add("inactive");
                this.button3.classList.add("inactive");
                this.button2.disabled = true;
                this.button3.disabled = true;
            } else {
                this.button2.classList.remove("inactive");
                this.button3.classList.remove("inactive");
                this.button2.disabled = false;
                this.button3.disabled = false;
            }
    }

    // state methods
    increment() {
        this.count++;
        this.update();
        this.toggleInactive();
    }

    decrement() {
        this.count--;
        this.update();
        this.toggleInactive();
    }

    reset() {
        this.count = 0;
        this.update();
        this.toggleInactive();
    }

    update() {
        // set initial display content
        this.display.textContent = `Count: ${this.count}`;
    }
}