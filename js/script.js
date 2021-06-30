$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
            $('.logo').addClass("sticky")
            $('.menu').addClass("sticky")
            document.getElementById("menuIcon").src="../img/MenuIcon.png";
        } else {
            $('.navbar').removeClass("sticky")
            $('.logo').removeClass("sticky")
            $('.menu').removeClass("sticky")
            document.getElementById("menuIcon").src="../img/output-onlinepngtools.png";
        }
    })
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    })
});