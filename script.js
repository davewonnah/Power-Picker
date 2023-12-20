let admin_login_btn = document.querySelector("#signin-admin");
let signin_btn = document.querySelector("#signin-btn");
let title = document.querySelector(".logo-contents");
let user_feild = document.querySelector("#name-feild");
let user_password = document.querySelector("#user-password");
let admin_password = document.querySelector("#admin-password");
let admin_feild = document.querySelector("#admin-feild");
let signout = document.querySelector(".buttom-content");
let name_input = document.querySelector("#name-input");
let user_contents = document.querySelector("#user-contents");
let admin_contents = document.querySelector("#admin-contents");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main-container");

let toggle = document.querySelector(".toggle");
let side_bar = document.querySelector(".sidebar");

// side bar toggle
toggle.addEventListener("click", ()=>
{
    side_bar.classList.toggle("close");
    main.classList.toggle("active");
})




admin_login_btn.addEventListener("click", function(){
   user_contents.style.display = "none";
   admin_contents.style.display = "flex";
   user_feild.style.maxHeight = "0";
    console.log("hello");
    
});

signin_btn.addEventListener("click", function()
{
    admin_contents.style.display = "none";
    user_contents.style.display = "flex";
    console.log("hello");
    

});


function goToPage(page) {
    window.location.href = page;
}

// function validate(){
//   var user_feild = document.getElementById("name-input").value;
//   var user_password = document.getElementById("user-password").value;

//   if(user_feild == "Dave" && user_password == "123"){
//       alert("Login successully")
//       return false;
//   }
//   else
//   {
//     alert("Please fill in the above feilds");
//   }
// }
