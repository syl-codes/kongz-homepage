(function($) {
    "use strict"


    faq();
    story();
    goTop();
    burger_menu();
    main_title();
    head_side_sns();
    partner_swiper();
    hyundai_pop();
    setTimeout(function() {
        swiper_nft();
    }, 300);



    function main_title() {
        $(".mv_text h2 > div").append("<p></p><p></p><p></p><p></p>");
    }

    function swiper_nft() {
        let SwiperTop = new Swiper('.swiper_nft', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });
    }

    function faq() {
        $("#sec_faq .q").on('click', function() {
            if ($(this).hasClass("open")) {
                $("#sec_faq .q").removeClass("open");
                $("#sec_faq .a").slideUp();
            } else {
                $("#sec_faq .q").removeClass("open");
                $(this).addClass("open");
                $("#sec_faq .a").slideUp();
                $(this).next(".a").slideDown();
            }
        });
    }

    function story() {
        $("#sec_story .more").on('click', function() {
            $(this).toggleClass("open");
            $("#sec_story .story_contents").toggleClass("open");
        });
    }

    function goTop() {
        $(".goTop").on('click', function() {
            $("body,html").animate({ scrollTop: 0 }, 1000);
        });
    }


    function burger_menu() {


        function device_size() {
            if (window.innerWidth > 992) {
                $(".gnb").removeClass("mobile_gnb");
                $(".gnb").addClass("pc_gnb");
                closeMenu();
            } else {
                $(".gnb").addClass("mobile_gnb");
                $(".gnb").removeClass("pc_gnb");
                $(".side_link > ul").slideDown();
                setTimeout(function() {
                    $(".side_link > ul").slideUp();
                }, 1000);
            }
        }
        $(window).resize(function() {
            device_size();
        });
        device_size();

        $(".m_side_link_view").on("click", function() {
            $(".side_link > ul").slideToggle();
        });

        $(document).on("click", ".mobile_gnb > ul > li > a.spy", function() {
            closeMenu();
        });
        $(document).on("click", ".mobile_gnb > ul > li > a", function() {
            if ($(this).next("ul").length > 0) {
                $(this).next("ul").slideToggle();
            }
        });



        if ('ontouchstart' in window) { var click = 'touchstart'; } else { var click = 'click'; }

        $('div.burger').on(click, function() {
            if (!$(this).hasClass('open')) { openMenu(); } else { closeMenu(); }
        });

        $('div.menu ul li a').on(click, function(e) {
            e.preventDefault();
            closeMenu();
        });

        function openMenu() {
            $("header").addClass("mobile_nav_open");
            $('div.circle').addClass('expand');
            $('div.burger').addClass('open');
            $('div.x, div.y, div.z').addClass('coll');
            $(".gnb").find("li").addClass('animate');

            setTimeout(function() {
                $('div.y').hide();
                $('div.x').addClass('rotate30');
                $('div.z').addClass('rotate150');
            }, 70);
            setTimeout(function() {
                $('div.x').addClass('rotate45');
                $('div.z').addClass('rotate135');
            }, 120);
        }

        function closeMenu() {
            $("header").removeClass("mobile_nav_open");
            $('div.burger').removeClass('open');
            $('div.x').removeClass('rotate45').addClass('rotate30');
            $('div.z').removeClass('rotate135').addClass('rotate150');
            $(".gnb").find("li").removeClass('animate');

            setTimeout(function() {
                $('div.x').removeClass('rotate30');
                $('div.z').removeClass('rotate150');
            }, 50);
            setTimeout(function() {
                $('div.y').show();
                $('div.x, div.y, div.z').removeClass('coll');
            }, 70);
            setTimeout(function() {
                $('div.circle').removeClass('expand');
            }, 150);
        }

    }

    function head_side_sns() {
        $(".head_side_sns > a").on('click', function() {
            $(this).next("ul").slideToggle();
        });
    }

    function partner_swiper() {
        var p_swiper = new Swiper(".partner_swiper", {
            slidesPerView: 4,
            spaceBetween: 0,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }

    function hyundai_pop(){
        $(".hyundai_video_pop .close_video").on("click",function(){
            $(this).parents(".hyundai_video_pop").remove();
        });
        $(".migration_pop .close_pop").on("click",function(){
            $(".migration_pop").hide();
        });
    }









    $('body').scrollspy({ target: ".navbar", offset: 50 });
    $("#myNavbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });



})(jQuery);





AOS.init({
    easing: 'ease-out-back',
    duration: 1200
});