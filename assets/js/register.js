// Inisiasi element HTML yang kita butuhkan
const btn_register = document.querySelector("#btn_register");

const first_name_input = document.querySelector("input[name=first_name]");
const first_name_validation = document.querySelector("#first_name_validation");

const last_name_input = document.querySelector("input[name=last_name]");
const last_name_validation = document.querySelector("#last_name_validation");

const email_input = document.querySelector("input[name=email]");
const email_validation = document.querySelector("#email_validation");

const password_input = document.querySelector("input[name=password]");
const password_validation = document.querySelector("#password_validation");

const conf_password_input = document.querySelector("#conf-password");
const conf_password_validation = document.querySelector("#validation_confpassword");

const NomorTelepon_input = document.querySelector("input[name=NomorTelepon]");
const NomorTelepon_validation = document.querySelector("#NomorTelepon_validation");

// Debuging form first name dengan eventListener
first_name_input.addEventListener("input", (e) => {
    console.log(first_name_input.value);
    validateFirstName();
});

const validateFirstName = () => {
    if (first_name_input.value.length < 3 || first_name_input.value.length > 10) {
        first_name_validation.innerHTML = "First Name tidak boleh kurang dari 3 dan melebihi 10 character";
        first_name_validation.style.display = "inline";
        first_name_input.classList.add("is-invalid");
        first_name_input.classList.remove("is-valid");
    } else {
        first_name_input.classList.add("is-valid");
        first_name_input.classList.remove("is-invalid");
        first_name_validation.style.display = "none";
    }
};

// Debuging form last name dengan eventListener
last_name_input.addEventListener("input", (e) => {
    console.log(last_name_input.value);
    validateLastName();
});

const validateLastName = () => {
    if (last_name_input.value.length < 3 || last_name_input.value.length > 10) {
        last_name_validation.innerHTML = "Last Name tidak boleh kurang dari 3 dan melebihi 10 character";
        last_name_validation.style.display = "inline";
        last_name_input.classList.add("is-invalid");
        last_name_input.classList.remove("is-valid");
    } else {
        last_name_input.classList.add("is-valid");
        last_name_input.classList.remove("is-invalid");
        last_name_validation.style.display = "none";
    }
};

// Debuging form email dengan eventListener
email_input.addEventListener("input", (e) => {
    console.log(email_input.value);
    validateEmail();
});

const validateEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email_input.value === ""){
        email_validation.innerHTML = "Email tidak boleh kosong!";
        email_validation.style.display = "inline";
        email_input.classList.add("is-invalid");
    } else if (!email_input.value.match(regexEmail)){
        email_validation.innerHTML = "Email tidak valid!";
        email_validation.style.display = "inline";
        email_input.classList.add("is-invalid");
    } else {
        email_input.classList.add("is-valid");
        email_input.classList.remove("is-invalid");
        email_validation.style.display = "none";
    }
};

// Event listener for password input
password_input.addEventListener("input", (e) => {
    console.log(password_input.value); // Logging the input value for debugging
    validatePassword();
});

const validatePassword = () => {
    // Regular expression for password validation
    const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (password_input.value === "") {
        password_validation.innerHTML = "Password tidak boleh kosong!";
        password_validation.style.display = "inline";
        password_input.classList.add("is-invalid");
    } else if (!password_input.value.match(regexPassword)) {
        password_validation.innerHTML = "Password harus min 8 karakter, huruf besar, huruf kecil, angka dan karakter spesial";
        password_validation.style.display = "inline";
        password_input.classList.add("is-invalid");
    } else {
        password_input.classList.add("is-valid");
        password_input.classList.remove("is-invalid");
        password_validation.style.display = "none";
    }
};

// Event listener for confirmation password input
conf_password_input.addEventListener("input", () => {
    validateConfPassword();
});

const validateConfPassword = () => {
    if (conf_password_input.value === "") {
        conf_password_validation.innerHTML = "Konfirmasi password tidak boleh kosong!";
        conf_password_validation.style.display = "inline";
        conf_password_input.classList.add("is-invalid");
        conf_password_input.classList.remove("is-valid");
    } else if (conf_password_input.value !== password_input.value) {
        conf_password_validation.innerHTML = "Password dan konfirmasi password harus sama!";
        conf_password_validation.style.display = "inline";
        conf_password_input.classList.add("is-invalid");
        conf_password_input.classList.remove("is-valid");
    } else {
        conf_password_input.classList.add("is-valid");
        conf_password_input.classList.remove("is-invalid");
        conf_password_validation.style.display = "none";
    }
};


// Debuging form nomor telepon dengan eventListener
NomorTelepon_input.addEventListener("input", (e) => {
    console.log(NomorTelepon_input.value);
    validateNomorTelepon();
});

const validateNomorTelepon = () => {
    const regexNomorTelepon = /^[0-9]{10,12}$/;

    if (NomorTelepon_input.value === ""){
        NomorTelepon_validation.innerHTML = "Nomor telepon tidak boleh kosong!";
        NomorTelepon_validation.style.display = "inline";
        NomorTelepon_input.classList.add("is-invalid");
    } else if (!NomorTelepon_input.value.match(regexNomorTelepon)){
        NomorTelepon_validation.innerHTML = "Nomor telepon tidak valid!";
        NomorTelepon_validation.style.display = "inline";
        NomorTelepon_input.classList.add("is-invalid");
    } else {
        NomorTelepon_input.classList.add("is-valid");
        NomorTelepon_input.classList.remove("is-invalid");
        NomorTelepon_validation.style.display = "none";
    }
};

// Debuging btn register
btn_register.addEventListener("click", (e) => onRegister(e));

const onRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Ini button register");

    // Tambahkan logika validasi sebelum submit form
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateConfPassword();
    validateNomorTelepon();
};