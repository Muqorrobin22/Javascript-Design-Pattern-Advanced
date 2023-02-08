let instance;
let counter = 0;

class Counter {
  constructor() {
    // With this type of checking conditional the singleton have been implemented
    if (instance) {
      throw new Error("You can only Create one Instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
// --------------- if this code is executed -------------------//
// const counter1 = new Counter();
// const counter2 = new Counter();

// This will execute code : You can only execute one Instance!
// console.log(counter1.getInstance() === counter2.getInstance());

// ----------------------------------------------------------

const singetonCounter = Object.freeze(new Counter());
export default singetonCounter;
