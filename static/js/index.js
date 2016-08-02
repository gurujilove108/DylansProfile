jQuery(document).ready(function() {
    var currentWidth;
    $(window).resize(onResize);
    function onResize(event) {
        currentWidth = jQuery(window).width();
        if (currentWidth <= 1300) {
            jQuery(".fa-3x").removeClass("fa-3x").addClass('fa-2x');
        } else if (currentWidth > 1300) {
            jQuery(".fa-2x").removeClass("fa-2x").addClass('fa-3x');
            jQuery("#dropdownMenuButton i").removeClass("fa-3x").addClass("fa-2x");
        }
    }
    angular.bootstrap(document, ['dylansProfileApp']);
});

