// Index.html logic
$(document).ready(function () {

  // In case we decide to put image carousel in later
  $('.carousel').carousel({
      interval: 3000,
  });
  
  // Initialize maps
  google.maps.event.addDomListener(window, 'load', initMap);

  // Google Maps settings
  // Regular map
  function initMap() {
      var location = new google.maps.LatLng(29.7292957, -95.5481154);

      var mapoptions = {
          center: location,
          zoom: 17,
      };

      var map = new google.maps.Map(
          document.getElementById('map-container'),
          mapoptions
      );

      var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Houston',
      });
  }

  // Pull down menu
  $('.menu-btn').on('click', function (event) {
      event.preventDefault();

      //Check this block is open or not..
      if (!$(this)
          .prev()
          .hasClass('open')
      ) {
          $('.header').slideDown(400);
          $('.header').addClass('open');
          $(this)
              .find('i')
              .removeClass()
              .addClass('fa fa-chevron-up');
      } else if (
          $(this)
              .prev()
              .hasClass('open')
      ) {
          $('.header').removeClass('open');
          $('.header').slideUp(400);
          $(this)
              .find('i')
              .removeClass()
              .addClass('fa fa-chevron-down');
      }
  });

  // Smooth Scrolling function
  // Select all links with hashes
  $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
          // On-page links
          if (
              location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
          ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
              // Does a scroll target exist?
              if (target.length) {
                  // Only prevent default if animation is actually gonna happen
                  event.preventDefault();
                  $("html, body").animate({
                      scrollTop: target.offset().top,
                  },
                  1000,
                  function () {
                      // Callback after animation
                      // Must change focus!
                      var $target = $(target);
                      $target.focus();
                      if ($target.is(":focus")) {
                          // Checking if the target was focused
                          return false;
                      } else {
                          $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                          $target.focus(); // Set focus again
                      }
                  }
                  );
              }
          }
      });
});