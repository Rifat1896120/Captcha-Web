let captcha = document.querySelector(".captcha");
let retry = document.querySelector(".retry");
let text = document.querySelector("input");
let checks = document.querySelector(".check");
let result = document.querySelector(".result");

const createCaptcha = () => {
  let letter =
    "ABC123D546EFG54HIJ654KLMN654O789PQR54STU97V8WXYZabcd654ef654656456ghijk6584lm8486n21opq987rstuvwxyz5";  // captcha value

  letter = letter.split(""); //create string to array
  
  let random = Math.floor(Math.random() * letter.length);
  let random1 = Math.floor(Math.random() * letter.length);
  let random2 = Math.floor(Math.random() * letter.length);
  let random3 = Math.floor(Math.random() * letter.length);
  let random4 = Math.floor(Math.random() * letter.length);
  let random5 = Math.floor(Math.random() * letter.length); //create Random number

  captcha.innerHTML = `${letter[random]}${letter[random1]}${letter[random2]}${letter[random3]}${letter[random4]}${letter[random5]} `; // Html change
};

retry.addEventListener("click", () => {
  createCaptcha(); // call createCaptcha() function
});
createCaptcha();
const check = () => {
  let textV = text.value;


  if (textV == captcha.innerText) {
    result.innerHTML = "Match";
    result.classList.remove("nomatch");
    result.classList.add("match");
  text.value = "";
  } else {
    result.innerHTML = "Not Match";
    result.classList.remove("match");
    result.classList.add("nomatch");
  }

    createCaptcha();
};

checks.addEventListener("click", () => {
  check();
});
