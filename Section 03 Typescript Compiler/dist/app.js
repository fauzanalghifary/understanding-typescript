"use strict";
console.log("Time to get started...!");
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked!" + message);
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    clickHandler("hello");
});
//# sourceMappingURL=app.js.map