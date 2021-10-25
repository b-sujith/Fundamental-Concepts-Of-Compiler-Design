$(document).ready(function() {
    $("#carousel").carousel({interval:2000});
    $("#carousel").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#carousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
                $("#carouselButton").removeClass('btn-danger');
                $("#carouselButton").addClass('btn-success');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#carousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
                $("#carouselButton").removeClass('btn-success');
                $("#carouselButton").addClass('btn-danger');                    
            }
    })
    $('#reserve').click(function() {
        $('#reservetable').modal()
    })
    $('#login').click(function() {
        $('#loginmodal').modal()
    })
});