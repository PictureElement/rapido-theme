$(document).ready(function() {
    // 1. Back to top
    if ($('#toTop').length) {
        $('#toTop').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000, function () {
                // Callback after animation
            });
        });
    }

    // 2. Counters
    if (window.counterUp) {
        var counterUp = window.counterUp["default"]; // Import counterUp2
        var $el = $('.counter');

        $el.each(function (ignore, counter) {
            var waypoint = new Waypoint({
                element: $(this),
                handler: function() { 
                    counterUp(counter, {
                        duration: 2000,
                        delay: 16
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view',
            });
        });
    }

    // 3. Hero carousel
    if ($('#heroCarousel').length) {
        $('#heroCarousel').owlCarousel({
            loop:true,
            pullDrag: false,
            mouseDrag: false,
            margin:0,
            autoplay:false,
            checkVisibility: false,
            items: 1,
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            responsive : {
                0: {
                    nav:false,
                    dots:true
                },
                992 : {
                    nav:true,
                    dots:false
                }
            }
        });
    }
    
    // 4. Clients carousel
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

    // 5. Testimonials carousel
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

    // 6. Blog carousel
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
                // breakpoint from 992px up
                992 : {
                    items:2,
                    stagePadding: 32,
                    margin:16
                }
            }
        });
    }

    // 7. Post carousel
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

    // 8. Fancybox options
    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox({
            smallBtn : true,
            hideScrollbar: true
        });
    }

    // 9. Smooth scrolling
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="javascript:;"]')
        .not('[data-fancybox]')
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

    // 10. Initialize AOS
    AOS.init();
    
    // 11. Copy to clipboard
    if ($('#copyLink').length) {
        $('#copyLink').tooltip({
            trigger: 'click',
            placement: 'bottom'
        });

        function setTooltip(message) {
            $('#copyLink').tooltip('hide').attr('data-original-title', message).tooltip('show');
        }

        function hideTooltip(message) {
            setTimeout(function() {
                $('#copyLink').tooltip('hide');
            }, 1000);
        }

        var clipboard = new ClipboardJS('#copyLink');

        clipboard.on("success", function(e) {
            setTooltip('Copied!');
            hideTooltip();
        });

        clipboard.on("error", function(e) {
            setTooltip('Failed!');
            hideTooltip();
        });
    }

    // 12. Detect when jump links section get pinned
    if ($('#jumpLinks').length) {
        const el = document.querySelector("#jumpLinks")
        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("jump-links_pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );
        observer.observe(el);
    }

    // 13. Detect document height change and refresh AOS
    const resizeObserver = new ResizeObserver(entries => {
        AOS.refresh();
    });

    resizeObserver.observe(document.body);

    // 14. Copyright
    window.console.log.apply(console, ["%c Made by Marios Sofokleous | msof.me %c %c🤘 %c\n", "color: #fff; background: #114F7F; padding:5px 0;", "color: #fff; background: #000; padding:5px 0 5px 5px;", "background: #000; padding:5px 0", "background: #000; padding:5px 5px 5px 0"]);
});

$(window).on('load', function() {
    // 1. Hide spinner on page load
    $('#spinnerWrapper').fadeOut('slow');
    $('html').css('overflow-y', 'visible');
    
    // 2. Refresh AOS
    AOS.refresh();
});