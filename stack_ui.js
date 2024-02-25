class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      let stackStr = "";
      for (let i = 0; i < this.items.length; i++) {
        stackStr += this.items[i] + " ";
      }
      return stackStr;
    }
  }
  
  // Initialize a stack
  const stack = new Stack();
  
  //  UI for interacting with the stack
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  console.log("Stack Operations:");
  console.log("1. Push");
  console.log("2. Pop");
  console.log("3. Peek");
  console.log("4. Print Stack");
  console.log("5. Exit");
  
  rl.prompt();
  
  rl.on("line", (input) => {
    switch (input.trim()) {
      case "1":
        rl.question("Enter element to push: ", (element) => {
          stack.push(element);
          console.log(`Pushed element: ${element}`);
          rl.prompt();
        });
        break;
      case "2":
        const poppedElement = stack.pop();
        console.log(`Popped element: ${poppedElement}`);
        rl.prompt();
        break;
      case "3":
        const topElement = stack.peek();
        console.log(`Top element: ${topElement}`);
        rl.prompt();
        break;
      case "4":
        console.log(`Current stack: ${stack.printStack()}`);
        rl.prompt();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid input");
        rl.prompt();
        break;
    }
  });