// inisiasi element html yang kita butuhkan
const btn_login = document.querySelector("#btn_login");
const email_input = document.querySelector("input[name=email]");
// insiasi validasi email
const email_validation = document.querySelector("#email_validation");

const password_input = document.querySelector("input[name=password]");
// insiasi validasi password
const password_validation = document.querySelector("#password_validation");

// debuging form email dengan eventListerner
email_input.addEventListener("input", (e) => {
  console.log(email_input.value);
  validateEmail();
});

const validateEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email_input.value === "" ){
        email_validation.innerHTML = "Email tidak boleh kosong";
        email_validation.style.display = "inline";
        email_input.classList.add("is-invalid");
    } else if (!email_input.value.match(regexEmail)) {  
        email_validation.innerHTML = "Email tidak valid";
        email_validation.style.display = "inline";
        email_input.classList.add("is-invalid");
    } else {
        email_input.classList.add("is-valid");
        email_input.classList.remove("is-invalid");
        email_validation.style.display = "none";
    }
}

// debuging form password dengan eventListerner
password_input.addEventListener("input", (e) => {
  console.log(password_input.value);
  validatePassword();
});

const validatePassword = () => {
    const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (Password_input.value === "" ){
        Password_validation.innerHTML = "Password tidak boleh kosong";
        Password_validation.style.display = "inline";
        Password_input.classList.add("is-invalid");
    } else if (!Password_input.value.match(regexPassword)) {  
        Password_validation.innerHTML = "Password harus minn 8 karaker, huruf besar, huruf kecil, angka, dan karakter spesial";
        Password_validation.style.display = "inline";
        Password_input.classList.add("is-invalid");
    } else {
        Password_input.classList.add("is-valid");
        Password_input.classList.remove("is-invalid");
        Password_validation.style.display = "none";
    }
}

// debuging btn login
btn_login.addEventListener("click", (e) => onLogin(e));

const onLogin = (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Ini button login");
};