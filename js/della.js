/**
 * Created with JetBrains WebStorm.
 * User: Della
 * Date: 8/9/13
 * Time: 12:43 AM
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){

    $("#practiceCircle").hover(
        function(){
            $(this).rotate({animateTo:720});
            $(this).animate({'border-width': '80px'});
        },
        function(){
            $(this).rotate({animateTo:0});
            $(this).animate({'border-width': '5px'});
        }
    )
})