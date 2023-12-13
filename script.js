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
let main = document.querySelector(".main-container")

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



// ============================= bar chart =============================


var barchartoptions = {
  series: [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
  ],
}
};

var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();