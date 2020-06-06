
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $(".navbar").css("padding", "5px 10px");
        $(".navbar").css("background", "white");
        // $(".main-logo").css("width","60px");
        if (document.body.clientWidth > 576) {
            $(".main-logo").css("width", "64px");
        }
        else {
            $(".main-logo").css("width", "60px");
        }

    } else {
        $(".navbar").css("padding", "5px 10px");
        $(".navbar").css("background", "transparent");
        if (document.body.clientWidth > 576) {
            $(".main-logo").css("width", "90px");
        }


    }
}


$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - 75
    }, 1000)
    //added offset -75 to get to the correct id
})


$(window).resize(function () {
    if (document.body.clientWidth > 576) {
        $(".main-logo").css("width", "90px");
    }
    else {
        $(".main-logo").css("width", "60px");
    }
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$("#img01").on("click", function() {
    $(this).modal();
 });

 function myFunction(src,text)
 {
console.log(src);
$("#imgModal").attr("src","img/gallery"+ src +".jpg");
$('#exampleModalLabel').html(text);
 }

 