$(function(){

  //variables to prevent jumping into the DOM excessively
  var $content = $('.content');
  var $tab = $('.tab');

  //on page load changes first tabs background image
  $('.tab:first').css('background-image', 'url("images/btn-arrow-down.png")');
  //on page load displays only the first div.content
  $('.content:not(:first)').hide();

  //on click, hides and shows the tabbed content
  $tab.on('click', function() {
    //if the next element in the DOM is "hidden" then proceed.
    if ($(this).next().is(":hidden")){
        //get all content div's and slide them up.
        $content.slideUp('300');
        //get all background images and change them all to the arrow-right.png
        $tab.css('background-image', 'url("images/btn-arrow-right.png")');
        //get the one that was clicked, change its image to point down
        $(this).css('background-image', 'url("images/btn-arrow-down.png")');
        //get the one that was clicked and slide it down
        $(this).next().slideDown('300');
    }
  });

});