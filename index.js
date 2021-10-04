var barIconMenu = document.getElementById("bar-icon-menu")

var navMobile = document.getElementById("nav-mobile")


barIconMenu.addEventListener("click", function(){
   
    navMobile.innerHTML = `  <div class="headers">
    <div id="crossicons"> <i id="crossicon" class="fa fa-times-circle"></i>
    </div>
    </div>
   <div class="menu-mobile">
    <div class="navigation-mobile-menu navigation-mobile"><i class="fa fa-home"></i> <span> <a href="./index.html">HOME</a> </span>
        <br>
        
        </div>
        
    <div class="navigation-mobile-menu navigation-mobile"><i class="fab fa-servicestack"></i><span> <a href="./services.html">SERVICES</a></span> <br>
 </div>
 <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="./products.html">Product Engineering</a></span>
     <br>
     
     </div>
     <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">Dedicated Resources</a></span>
         <br>
         
         </div>
         <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span>  <a href="#">Costume Software Development</a></span>
             <br>
             
             </div>
             <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span>  <a href="#">Maintainance and Support</a></span>
                 <br>
                 
                 </div>
    <div class="navigation-mobile-menu navigation-mobile"><i class="fab fa-product-hunt"></i><span> <a href="./products.html">PRODUCTS</a></span>
        <br>
      </div>
      <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">SERP - Trading ERP</a></span>
        <br>
        
        </div>
        <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span><a href="#">Cloud ERP Software</a></span>
            <br>
            
            </div>
            <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">SERP - Manufacturing ERP</a></span>
                <br>
                
                </div>
               
    <div class="navigation-mobile-menu navigation-mobile"><i class="fas fa-industry"></i><span> <a href="./industries.html">INDUSTRIES </a></span>
        <br>
       </div>
       <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">Manufacturing</a>
      
      
    
       </span>
        <br>
        
        </div>
        <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span>  <a href="#">Oil and Gas</a></span>
            <br>
            
            </div>
            <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">Construction</a></span>
                <br>
                
                </div>
                <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span>    <a href="#">Real state</a></span>
                    <br>
                    
                    </div>
                    <div class="navigation-mobile-menu navigation-mobile navigation-mobiles"> <span> <a href="#">E-commerce  </a></span>
                        <br>
                        
                        </div>
   
</div>
<div class="navigation-mobile about-mrsoshy"><a href="./company.html">COMPANY</a></div>
<div class="navigation-mobile blog"><a href="./howwework.html">HOW WE WORK</a></div>
<div class="navigation-mobile media"><a href="./clients.html">CLIENTS</a></div>
<div class="navigation-mobile admisiion-form"><a href="./contact.html">CONTACT US</a></div>`
var crossIcon = document.getElementById("crossicon")
crossIcon.addEventListener("click", function(){
    navMobile.innerHTML=""
})
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        // nav:true,
        // dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1000,
        autoplayHoverPause:true
    });
});


$(document).scroll(function() {

    myID = document.getElementById("advertisement");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 500) {
            myID.className = "advertisement show"
        } else {
            myID.className = "advertisement hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});


