import { mobileMenu } from "./modules/mobile-menu.js";
import { Counter } from "./modules/counter.js";

mobileMenu();
const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2");
const counter3 = new Counter("#counter-container3");