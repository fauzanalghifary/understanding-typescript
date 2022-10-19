console.log("Time to get started...!");

const button = document.querySelector("button");

function clickHandler(message: string) {
  // const username = "pojan";
  console.log("clicked!" + message);
}

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

// button?.addEventListener("click", clickHandler.bind(null, "hello"));
button?.addEventListener("click", () => {
  clickHandler("hello");
});
