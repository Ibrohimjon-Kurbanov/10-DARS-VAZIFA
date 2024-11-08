const mainWrapper = document.querySelector(".main-wrapper");
const mainHidden = document.querySelector(".main-hidden");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");

const form = document.querySelector("form");

const adminLogin = "admin";
const adminPassword = 123456;

if (localStorage.getItem("login") === "true") {
  mainWrapper.style.display = "none";
  mainHidden.style.display = "block";
}

function validate(username, password) {
  if (username.value.length < 5 || password.value.length < 5) {
    alert("Username or password must not be less than 5 characters");
    username.focus();
    return false;
  }

  return true;
}

loginBtn &&
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let isExist = validate(username, password);
    if (!isExist) {
      return false;
    }
    if (
      username.value.trim() == adminLogin &&
      password.value == adminPassword
    ) {
      mainWrapper.style.display = "none";
      mainHidden.style.display = "block";

      localStorage.setItem("login", "true");
    } else {
      alert("Username or Password is incorrect, ");
      localStorage.removeItem("login");
      form.reset();
      username.focus();
    }
  });

const exitBtn = document.querySelector(".exit-btn");

exitBtn &&
  exitBtn.addEventListener("click", function () {
    localStorage.removeItem("login");
    mainWrapper.style.display = "";
    mainHidden.style.display = "";
    form.reset();
    username.focus();
  });
