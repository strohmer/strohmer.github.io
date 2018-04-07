$(document).ready(function () {
    $("#footer").hide();
});

$('#sitenav a[href="#about"]').on('shown.bs.tab', function () {
    $("#footer").hide();
});

$('#sitenav a[href="#about"]').on('hidden.bs.tab', function () {
    $("#footer").show();
});

function clickTab(tab) {
    $('#sitenav a[href="' + tab + '"]').trigger('click');
}

$('#landing-intro #blog-link').click(function(e) {
    clickTab('#blog');
});

$('.mail-me').click(function() {
    window.open('mailto:jason@jasoncraigg.com');
  });

$('#projects .projects-container').click(function (e) {
    var jump = $(this).attr("jump-target");
    clickTab('#experience');
    setTimeout(function () {
        $("html, body").animate({
            scrollTop: $("#" + jump).offset().top
        }, '500');
    }, 600);
});

$(function () {
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('#sitenav a').click(function (e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });

    window.addEventListener('hashchange', function () {
        var changedHash = window.location.hash;
        changedHash && $('ul.nav a[href="' + changedHash + '"]').tab('show');
    }, false);
});

$(window).resize(function() {
    if ($(window).width() <= 574) $('#sitenav').addClass("nav-justified");
    else $('#sitenav').removeClass("nav-justified");
});
