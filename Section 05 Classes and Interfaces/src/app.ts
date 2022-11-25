// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  //   readonly name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
user1 = new Person();
// user1.name = "pojan"; error nih

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1.greet("Hi there - I am");
