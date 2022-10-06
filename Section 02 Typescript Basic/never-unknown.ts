let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "pojan";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): unknown {
  throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
