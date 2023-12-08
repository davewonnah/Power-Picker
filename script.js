let signup_btn = document.querySelector("#signin-admin");
let signin_btn = document.querySelector("#signin-btn");
let title = document.querySelector(".logo-contents");
let user_feild = document.querySelector("#name-feild");
let user_password = document.querySelector("#user-password");
let admin_feild = document.querySelector("#admin-feild");
let signout = document.querySelector(".buttom-content");
let name_input = document.querySelector("#name-input");

function toggleFields(showUserField) {
    user_feild.style.maxHeight = showUserField ? "65px" : "0";
    admin_feild.style.maxHeight = showUserField ? "0" : "65px";
}

signin_btn.addEventListener("click", function() {
    // Check if the name_input field is not empty
    if (name_input.value == "") {
        alert("Please enter voter's ID");
    }
    // if (name_input.value.trim() !== "") {
    //     toggleFields(true);
    //     signin_btn.classList.remove("disable");
    //     signup_btn.classList.add("disable");
    // } 
});

signup_btn.addEventListener("click", function() {
    // You can add similar validation for other fields if needed
    toggleFields(false);
    signup_btn.classList.remove("disable");
    signin_btn.classList.add("disable");
    
});