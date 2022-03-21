$(document).ready(function () {
    $('.hero-slider').slick({
       dots: true, 
       autoplay: true,
       arrows:false,
    });
});

$(document).ready(function () {
    $('.hero-slider').slick({
        dots: true,
        autoplay: true,

    });
});

console.log('asaas');   
var myVar;

function loadingfunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}