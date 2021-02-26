$(document).ready(function() {
    // 1. Projects section filters
    $(".grid__controls button.btn").click(function() {
        $(".grid__controls").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    // 2. Add header shadow
    if ($('#pageHeader').length) {
        var $pageHeader = $('#pageHeader');

        if( $(window).scrollTop() > 0 ) {
            $pageHeader.addClass('header_shadow');
        }

        $('.navbar-toggler').on('click', function() {
            var isNavbarCollapseVisible = $('.navbar-collapse').hasClass('show');
            var isScrollTopGreaterThanZero = ($(window).scrollTop() > 0) ? true : false;
            var hasShadow = $pageHeader.hasClass('page-header_shadow');
            
            if (isScrollTopGreaterThanZero) {
                $pageHeader.addClass('page-header_shadow');
            } else if (isNavbarCollapseVisible) {
                $pageHeader.removeClass('page-header_shadow');
            } else {
                $pageHeader.addClass('page-header_shadow');
            }
        });

        $(window).scroll(function() {
            var isNavbarCollapseVisible = $('.navbar-collapse').hasClass('show');
            var isScrollTopGreaterThanZero = ($(window).scrollTop() > 0) ? true : false;
            var hasShadow = $pageHeader.hasClass('page-header_shadow');

            if (isScrollTopGreaterThanZero) {
                $pageHeader.addClass('page-header_shadow');
            } else if (isNavbarCollapseVisible) {
                $pageHeader.addClass('page-header_shadow');
            } else {
                $pageHeader.removeClass('page-header_shadow');
            }
        });
    }

    // 3. Back to top
    if ($('#toTop').length) {
        $('#toTop').on('click', function(e) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000, function () {
                // Callback after animation
            });
        });
    }

    // 4. Counters
    if (window.counterUp) {
        var counterUp = window.counterUp["default"]; // Import counterUp2
        var $el = $('.counter');

        $el.each(function (ignore, counter) {
            var waypoint = new Waypoint({
                element: $(this),
                handler: function() { 
                    counterUp(counter, {
                        duration: 1000,
                        delay: 16
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view',
            });
        });
    }

    // 5. Hero carousel
    if ($('#heroCarousel').length) {
        $('#heroCarousel').owlCarousel({
            loop:false,
            margin:0,
            autoplay:false,
            checkVisibility: false,
            items: 1,
            nav:false,
            dots:true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        });
    }
    
    // 6. Clients carousel
    if ($('#clientsCarousel').length) {
        $('#clientsCarousel').owlCarousel({
            loop:true,
            nav:false,
            dots: false,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            margin:16,
            responsive:{
                // breakpoint from 0 up
                0:{
                    items:3
                },
                // breakpoint from 768px up
                768 : {
                    items:4
                },
                // breakpoint from 992px up
                992 : {
                    items:6
                }
            }
        });
    }

    // 7. Testimonials carousel
    if ($('#testimonialsCarousel').length) {
        $('#testimonialsCarousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: true,
            autoplay:false,
            responsive:{
                // breakpoint from 0 up
                0:{
                    items:1
                }
            }
        });
    }

    // 8. Blog carousel
    if ($('#blogCarousel').length) {
        $('#blogCarousel').owlCarousel({
            loop:false,
            nav:false,
            dots: false,
            autoplay:false,
            responsive:{
                // breakpoint from 0 up
                0:{
                    items:1,
                    stagePadding: 24,
                    margin:12
                },
                // breakpoint from 576px up
                992 : {
                    items:2,
                    stagePadding: 32,
                    margin:16
                }
            }
        });
    }

    // 9. Post carousel
    if ($('#singlePostCarousel').length) {
        $('#singlePostCarousel').owlCarousel({
            loop:true,
            nav:true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: false,
            autoplay:false,
            items: 1
        });
    }

    // 10. Fancybox options
    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox({
            smallBtn : true,
            hideScrollbar: true
        });
    }

    // 11. Headroom.js
    if (document.body.contains(document.getElementById("pageHeader"))) {
        var pageHeader = document.getElementById("pageHeader");
        var options = {
            offset : 500
        }
        var headroom  = new Headroom(pageHeader, options);
        headroom.init();
    }

    // 12. Smooth scrolling
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
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
                    }, 1000, function () {
                        // Callback after animation
                    });
                }
            }
        });

    // 13. Initialize AOS
    AOS.init();
    
    // Copyright
    window.console.log.apply(console, ["%c Made by Marios Sofokleous | msof.me %c %c🤘 %c\n", "color: #fff; background: #0020f4; padding:5px 0;", "color: #fff; background: #242424; padding:5px 0 5px 5px;", "background: #242424; padding:5px 0", "background: #242424; padding:5px 5px 5px 0"]);
});

$(window).on('load', function() {
    // 1. Hide spinner on page load
    $('#spinnerWrapper').fadeOut('slow');
    $('html').css('overflow-y', 'visible');
});