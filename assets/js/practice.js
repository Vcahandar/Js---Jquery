$(document).ready(function(){

    // let elem=document.querySelector("h1")
    // console.log(elem);


    // let elem =$("h1")
    // console.log(elem.text("sagollar"));

    // $(".check").click(function(){
    //     $(this).css("background-color","red")
    // })

    // $(".add").click(function(){
    //     $(this).css("background-color","green")
    // })

    // $(".check").click(function(){
    //     $(this).css("background-color","red")
    // })

    // $(".add").click(function(){
    //     $(this).css("background-color","green")
    //     $(this).next().css("background-color","green")

    // })


    $(".hide").click(function(){
        $(".content").hide(2000)
    })

    $(".show").click(function(){
        $(".content").show(2000,function(){
            $(this).css("background-color","green")
        })
    })

    $(".toggle ").click(function(){
        $(".content").toggle()
    })

})
