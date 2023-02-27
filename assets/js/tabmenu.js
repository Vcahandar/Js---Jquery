$(document).ready(function(){

    // let headers = $(".item");
    // let contents = $(".items");

    $(".item").click(function(){

        let index = $(this).index();
        $(".items").hide();
        $(".items").eq(index).show();
    })

    $(".item").on({
        "click":function(){
            $(this).css("background-color","black")

        },
        "mouseenter":function(){
            $(this).css("background-color","black")
        },
        "mouseleave":function(){
            $(this).css("background-color","gray")
        }
    })


})