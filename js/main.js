var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(hellopreloader);
    }, 2000);
};

$(function(){
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});





new WOW().init();

$(function(){
  if ($(window).width() < 500){
    $('.news__facebook').attr('width', '300');
  }
});


$('.faq__title').click(function() {
  $(this).next().slideToggle(300);
  $(this).toggleClass(' active');
  })



$('.menu-wrap').click(function() {
  $('.menu').toggleClass(' active');
  })

  $(function(){
    if ($(window).width() < 500){
      $('.language__button').click(function() {
        $('.language__button').fadeIn(400);
        $(this).fadeOut(300);
        })
    }
  });


  $('.button').click(function() {
    window.open('https://vk.com/slovonline', '_blank');
    })