

$(document).ready(function() {
    $(".slider-container").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        arrows:true,
        prevArrow : $(".prev"),
        nextArrow : $(".next"),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

function toggleMenu() {
    
    var sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("opened");

    var sideMenuTransparent = document.getElementById("sideMenuTransparent");
    sideMenuTransparent.classList.toggle("opened");
}

window.addEventListener('scroll', function() {

    var targetDiv = this.document.getElementById('headerContact');
    var header = this.document.getElementById('header');
    var menuBar = this.document.getElementById('menuBar');
    var logoBox = this.document.getElementById('logo');
    
    if (window.scrollY > 30) {
        targetDiv.style.display = 'none';
        
        menuBar.style.height = "10vh";
        logoBox.style.height = "10vh";
        header.style.height = "10vh";
    }else {
        menuBar.style.height = "15vh";
        logoBox.style.height = "15vh";
        targetDiv.style.display = 'flex';
        
    }

    /* For the banner */

    var banner = document.querySelector(".banner");
    var recommendDiv = document.querySelector(".recomment-blogs");
    const footer = document.getElementById('footer');
    
   
    
    
  });

