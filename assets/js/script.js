  $(document).ready(function() {

     $('#clickme').on('click', function() {
       $('html, body').animate({
         scrollTop: ($('#about-me').offset().top - 100)
       }, 1000);
       $('.active').removeClass('active');
       $(this).parent().addClass('active');

       return false;
     });


     $('#clickme2').on('click', function() {
       $('html, body').animate({
         scrollTop: ($('#education').offset().top - 100)
       }, 1000);
       $('.active').removeClass('active');
       $(this).parent().addClass('active');

       return false;
     });


     $('#clickme3').on('click', function() {
       $('html, body').animate({
         scrollTop: ($('#work').offset().top - 100)
       }, 1000);
       $('.active').removeClass('active');
       $(this).parent().addClass('active');

       return false;
     });

     $('#clickme4').on('click', function() {
       $('html, body').animate({
         scrollTop: ($('#contact-us').offset().top - 100)
       }, 1000);
       $('.active').removeClass('active');
       $(this).parent().addClass('active');

       return false;
     });

     $('.navbar-nav li a').on('click', function(){
       $('.navbar-collapse').removeClass('in');

       });

});
