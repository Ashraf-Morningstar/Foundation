/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(document).ready(function(){
  $(".button-collapse").sideNav();

   $('#sidemanu-button').pushpin({
     top: 0
   });
  
  options = [{
    selector:'.scroll-down',
    offset:500,
    callback:"(function(){$('.scroll-down').addClass('hidden');}())"
  }],
  elms = $(".content .col").addClass('hidden');
  
  elms.each(function (k,e) {
    $(e).attr('sfkey',k)
    
    options.push({
      selector:'[sfkey="' + k + '"]',
      offset:200,
      callback:'showNext(' + k + ')'
    });
  })
  
  Materialize.scrollFire(options);

  function showNext(i) {
    var c = elms[i];
    c.classList.remove('hidden');
    console.log('triggered');
  }  
  
  window.showNext = showNext;
})