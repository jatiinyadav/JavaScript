let userEmail = "abc@gmal.com";
let userPass = "1234@Js";

function userEmailChecker(gmail) {
  if (gmail.includes("@gmail.com")) {
    return true;
  } else {
    return `Must include @gmail.com`;
  }
}

function userPassChecker(pass) {
  if (pass.includes("@") && pass.includes("1") && pass.length > 6) {
    return true;
  } else {
    return `Must include 1, @ and length > 6`;
  }
}

let result = userEmailChecker(userEmail);
console.log(result);

let resultPass = userPassChecker(userPass);
console.log(resultPass);
