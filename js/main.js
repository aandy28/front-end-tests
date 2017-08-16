(function() {
    particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });

    var carousel, next, prev, seats;
    carousel = $('.carousel');
    seats = $('.carousel-seat');
    next = function(el) {
        if (el.next().length > 0) {
            return el.next();
        } else {
            return seats.first();
        }
    };
    prev = function(el) {
        if (el.prev().length > 0) {
            return el.prev();
        } else {
            return seats.last();
        }
    };
    $('.toggle').on('click', function(e) {
        var el, i, j, new_seat, ref;
        el = $('.is-ref').removeClass('is-ref');
        if ($(e.currentTarget).data('toggle') === 'next') {
            new_seat = next(el);
            carousel.removeClass('is-reversing');
        } else {
            new_seat = prev(el);
            carousel.addClass('is-reversing');
        }
        new_seat.addClass('is-ref').css('order', 1);
        for (i = j = 2, ref = seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            // if (window.CP.shouldStopExecution(1)) {
            //     break;
            // }
            new_seat = next(new_seat).css('order', i);
        }
        // window.CP.exitedLoop(1);
        carousel.removeClass('is-set');
        return setTimeout(function() {
            return carousel.addClass('is-set');
        }, 50);
    });

    ctaScroll();

}.call(this));

function smoothScroll(element, padding) {
    $('html, body').animate({
        scrollTop: element.offset().top - padding
    }, 600);
}

function ctaScroll() {
    $('.mdl-navigation a').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        smoothScroll($(href), 0)
    })
}
// $( document).ready(function() {
// heroHeight();
// })

// $( window ).resize(function() {
//     heroHeight();
//     if ($(window).width() > 990) {
        
//     } else {
        
//     }   
// })

// function heroHeight() {
//     $windowHeight = $(window).height();
//     $('.wrap').css('height', $windowHeight)
// }