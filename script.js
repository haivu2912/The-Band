// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slider-img");
  
//   for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";  
//   }
//   myIndex++;

//   if (myIndex > x.length) {
//       myIndex = 1;
//   }    
//   x[myIndex-1].style.display = "block";  

//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

// Modal
function showModal() {
  document.getElementsByClassName('modal')[0].style.display = 'flex';
}

function hideModal() {
  document.getElementsByClassName('modal')[0].style.display = 'none';
}

// var closeBtn = document.getElementsByClassName('ticket_close')[0];
// var modal = document.getElementsByClassName('modal')[0];
// var closes = document.querySelectorAll('i[class *= "fas fa-times"]');
// for(var i = 0 ; i < closes.length ; i++) {
//   closeBtn.onclick = function(e) {
//     var close = closes[i];
//     console.log(close);
//   }
// }


// Mobile Menu
var header = document.getElementById('header');
var mobileMenuBtn = document.getElementsByClassName('mobile-menu-btn')[0];
var headerHeight = header.clientHeight;
mobileMenuBtn.onclick = function() {
  var isClose = header.clientHeight === headerHeight;
  if(isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
for(var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function(e) {
    var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParent){
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  }
}

// var subnav = document.getElementsByClassName('subnav')[0];
// var subnavWidth = subnav.clientWidth;
// console.log(subnavWidth);
// var more = document.getElementById('more-link');

// more.onclick = function() {
//   var isHide = subnav.clientWidth === subnavWidth;
//   if(subnavWidth !== 0) {
//     subnav.style.width = null;
//   }
// }

