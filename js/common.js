$(document).ready(function() {

    function fullHeight() {
        var winHeight = $(window).height();
        $('.start_s').height(winHeight);
    };
    fullHeight();
    $(window).resize(function() {
        fullHeight();
    });
//Anchors-----------------------
    function Anchor(active) {
        if (active == true) {
            var hash = window.location.hash;
            if (hash) {
                $("#menu li a").removeClass("active");
                $("a[href=" + hash + "]").addClass("active");
            }
        }

        function AnchorHref() {
            var anchor = $(this);
            if (hash) {
                $("#menu li a").removeClass("active");
                anchor.addClass("active");
            }
            $("html, body").animate({
                scrollTop: $(anchor.attr("href")).offset().top
            }, 500);
        }
        $("a[href*=#]").click(AnchorHref);
    };
    // fix-menu------------
    var $menu = $("#fixmen");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });



    Anchor(true);

});
