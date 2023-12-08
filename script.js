// let signup_btn = document.querySelector("#signin-admin");
// let signin_btn = document.querySelector("#signin-btn");
// let title = document.querySelector(".logo-contents");
// let user_feild = document.querySelector("#name-feild");
// let user_password = document.querySelector("#user-password");
// let admin_feild = document.querySelector("#admin-feild");
// let signout = document.querySelector(".buttom-content");
// let name_input = document.querySelector("#name-input");
// let sidebar = document.querySelector(".sidebar");

// signin_btn.addEventListener("click", function() {
//     // Check if the name_input field is not empty
//     if (name_input.value == "") {
//         alert("Please enter voter's ID.");
//         return; 
//     }
//     // Check if the user_password field is empty
//     if (user_password.value == "") {
//         alert("Please enter your password.");
//         return;
//     }
    

// });


// signup_btn.addEventListener("click", function() {
//     // You can add similar validation for other fields if needed
//     toggleFields(false);
//     signup_btn.classList.remove("disable");
//     signin_btn.classList.add("disable");
    
// });

function goToPage(page) {
    window.location.href = page;
}

let toggle = document.querySelector(".toggle");
let side_bar = document.querySelector(".sidebar");

toggle.addEventListener("click", ()=>{
    side_bar.classList.toggle("close");
})

