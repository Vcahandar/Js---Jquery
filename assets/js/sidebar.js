$(document).ready(function(){

$(".open-icon").click(function(){
    $(".sidebar").toggleClass("active")
    $(this).addClass("d-none")
    $(".close-icon").removeClass("d-none")
    
})

$(".close-icon").click(function(){
    $(".sidebar").toggleClass("active")
    $(this).addClass("d-none")
    $(".open-icon").removeClass("d-none")
    
})



})
