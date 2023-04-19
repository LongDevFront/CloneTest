/*  ---------------------------------------------------
---------------------------------------------------------  */
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Đóng hộp thoại modal khi người dùng nhấp vào nút "x"
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

/*------

---*/
function showOverlay() {
  // Tạo một div overlay và gán cho nó các thuộc tính CSS để hiển thị toàn màn hình
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = 9999;

  // Tạo một div chứa nội dung thông báo và thêm vào overlay
  var messageBox = document.createElement('div');
  messageBox.style.position = 'absolute';
  messageBox.style.top = '50%';
  messageBox.style.left = '50%';
  messageBox.style.transform = 'translate(-50%, -50%)';
  messageBox.style.backgroundColor = '#fff';
  messageBox.style.padding = '20px';
  messageBox.style.borderRadius = '10px';
  messageBox.style.textAlign = 'center';

  var message = document.createTextNode('Complete features, booking details please contact (0251) 391.8888');
  messageBox.appendChild(message);

  overlay.appendChild(messageBox);

  // Thêm sự kiện click cho overlay để đóng cửa sổ khi người dùng bấm vào vùng bên ngoài của nó
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  // Thêm overlay vào body
  document.body.appendChild(overlay);
}

/*---------------------------------------------------

-------------------------------------------------------*/
"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(100).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Offcanvas Menu
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  
  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Hero Slider
    --------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });

  /*------------------------
		Testimonial Slider
    ----------------------- */
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
		Date Picker
	--------------------*/
  $(".date-input").datepicker({
    minDate: 0,
    dateFormat: "dd MM, yy",
  });

  /*------------------
		Nice Select
	--------------------*/
  $("select").niceSelect();
  function shrinkImage() {
    if (window.innerWidth < 576) {
      var img = document.getElementById("img");
      for (var i = 0; i < img.length; i++) {
        img[i].style.width = "200px"; // Thu nhỏ hình ảnh xuống 50%
      }
    }
  }
})(jQuery);
 