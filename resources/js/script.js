$(document).ready(function(){

    $(".js--section-features").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
        }else {
            if (direction == "up") {
                $("nav").removeClass("sticky");
            }
        }
    });

});