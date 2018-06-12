$(document).ready(function () {
    $('.NavLateral-DropDown').on('click', function (e) {
        e.preventDefault();
        var DropMenu = $(this).next('ul');
        var CaretDown = $(this).children('i.NavLateral-CaretDown');
        DropMenu.slideToggle('fast');
        if (CaretDown.hasClass('NavLateral-CaretDownRotate')) {
            CaretDown.removeClass('NavLateral-CaretDownRotate');
        } else {
            CaretDown.addClass('NavLateral-CaretDownRotate');
        }

    });
    $('.tooltipped').tooltip({ delay: 50 });
    $('.ShowHideMenu').on('click', function () {
        var MobileMenu = $('.NavLateral');
        if (MobileMenu.css('opacity') === "0") {
            MobileMenu.addClass('Show-menu');
        } else {
            MobileMenu.removeClass('Show-menu');
        }
    });
    $('.btn-ExitSystem').on('click', function (e) {
        e.preventDefault();
        swal({
            title: "¿Desea cerrar sesión?",
            text: "La sesión actual se cerrará y abandonará la página",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "CERRAR",
            animation: "slide-from-top",
            closeOnConfirm: false,
            cancelButtonText: "CANCELAR"
        }, function () {
            window.location = '/';
        });
    });

    /*$(".alternar-panel-oculto").click(function () {
        $("#containerL").slideToggle("slow");
    });*/

    $('.alternar-panel-oculto').toggle( 
 
        /* 
            Primer click.
            Función que descubre un panel oculto
            y cambia el texto del botón.
        */
        function(e){ 
            $('#containerL').slideDown();
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
     
        /* 
            Segundo click.
            Función que oculta el panel
            y vuelve a cambiar el texto del botón.
        */
        function(e){ 
            $('#containerL').slideUp();
            e.preventDefault();
        }
 
    );
});
(function ($) {
    $(window).load(function () {
        $(".NavLateral-content").mCustomScrollbar({
            theme: "light-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons: { enable: true }
        });
        $(".ContentPage, .NotificationArea").mCustomScrollbar({
            theme: "dark-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons: { enable: true }
        });
    });
})(jQuery);
