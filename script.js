var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  //  if (st > $('nav').height()) {
  //    $('nav').addClass('navbar-background');
  //  } 
  if (st > lastScrollTop && st > $('header').height()) {
    $('nav').hide();
  } else if (st < lastScrollTop && st > $('nav').height()) {
    $('nav').show();
  } else if (st < $('header').height()) {
    $('nav').show();
  }

  if (st > $('nav').height()) {
    $('nav').addClass('navbar-background');
  } else {
    $('nav').removeClass('navbar-background');

  }
  lastScrollTop = st;

});

function animateOffset(elclicked, destination, number) {
  $(elclicked).click(function () {
    $('html,body').animate({
      scrollTop: $(destination).offset().top - number
    }, 'slow');
  })
}

animateOffset('header button', '.section-first', 20);
animateOffset('#nav-about', '#about', 20);
animateOffset('#nav-projects', '#projects', 30);
animateOffset('#nav-subscribe', '#singIn', 20);

ScrollReveal().reveal('#projects', { duration: 1600 });
ScrollReveal().reveal('#singIn', { duration: 1600 });
ScrollReveal().reveal('#section-cards', { duration: 1600 });



