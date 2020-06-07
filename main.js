
window.onscroll = function () { scrollFunction() };
//Function to make nav white and reduce logosize on scroll 
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
//on click of navabar take to the particular section
$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - 75
    }, 1000)
    //added offset -75 to get to the correct id
})

//responsive site to make logo small 
$(window).resize(function () {
    if (document.body.clientWidth > 576) {
        $(".main-logo").css("width", "90px");
    }
    else {
        $(".main-logo").css("width", "60px");
    }
});

//to hide navabar once click once collapse
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// $("#img01").on("click", function () {
//     $(this).modal();
// });

//modal
function myFunction(src, text) {
    console.log(src);
    $("#imgModal").attr("src", "img/gallery" + src + ".jpg");
    $('#exampleModalLabel').html(text);
}

