// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider1");
  let counter = 0;

  function nextSlide() {
    if (counter < slider.children.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
  }

  // Automatic sliding every 3 seconds
  setInterval(nextSlide, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider2");
  let counter = 0;

  function nextSlide() {
    if (counter < slider.children.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
  }

  // Automatic sliding every 3 seconds
  setInterval(nextSlide, 3000);
});

