/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

// by: George Olaru https://github.com/AshrafMorningstar/1560982-Rosa-Restaurant-Website/attachments/239212

$(document).ready(function() {
  
  $('button').on('click', function() {
    if($(this).hasClass('nav-button')) {
      $('nav div').addClass('show');
    } else if($(this).hasClass('exit-menu')) {
      $('nav div').removeClass('show');
    } 
    else if($(this).hasClass('to-top')) {
      $('html,body').animate({scrollTop:0}, 'slow');
    }
  });

  AOS.init({      
        duration: 1800,
    easing: 'ease'
  });
   
})