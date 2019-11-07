import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap/dist/js/bootstrap.min';

jQuery(function($) {
    $('input[type="password"]').on("keyup", function() {
        if($(this).val().length > 0) {
            $(this).siblings(".pass-show").css("opacity", "1");
        } else {
            $(this).siblings(".pass-show").css("opacity", "0");
        }
    });

    $(".pass-show").on("mousedown", function(e) {
        e.preventDefault();
        $(this).siblings('input[type="password"]').attr("type", "text");
    }).on("mouseup", function(e) {
        e.preventDefault();
        $(this).siblings('input[type="text"]').attr("type", "password");
    });

    //Scroll cards with range input on centered layout
    $("#scrollCardsInp").on("change input", function() {
        var value = $(this).val();
        $('.page-cards__row:first-child').css('transform', 'translateX(-'+value*2+'%)');
    })
});
