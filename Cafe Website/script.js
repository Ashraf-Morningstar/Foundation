/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

// burger nav

$("#burger, nav ul li").on("click", function(){
  $("#header-wrapper").toggleClass("open");
  $("nav ul").toggleClass("open");
});


// email validation

let emailRegex =/^([A-Za-z\d_-]+)@([A-Za-z\d_-]+)\.([A-Za-z]{2,14})(\.[A-Za-z]{2,8})?$/;

email.addEventListener("keyup", (e) => {
  
  let validation = emailRegex.test(email.value);
  
  if (email.value !== ""){
    if (validation){
    email.className= "valid";
  } else {
    email.className= "invalid";
  } 
  } else{
    email.className="";
  }

});


// nav-bar fade

window.addEventListener('scroll', function () {
  document.body.classList[
      window.scrollY > 220 ? 'add': 'remove'
  ]('scrolled');

});