$(window).on('scroll', function () {
  var scroll_top = $(window).scrollTop();
  if (scroll_top > 40) {
      $('.navbar').addClass('bg-white');
      $('navbar').css('box-shadow:0 2px 4px rgb(0,0,0,0.04');
      $('#navbar-brand-title').addClass('text-dark');
  }
  if (scroll_top < 40) {
      $('.navbar').removeClass('bg-white');
      $('.navbar').addClass('bg-body-light');
      $('#navbar-brand-title').addClass('text-white');
      $('#navbar-brand-title').removeClass('text-dark');
  }
  else {
      $('.navbar').removeClass('bg-body-light');
      $('#navbar-brand-title').removeClass('text-white');

  }
})

document.getElementById("webDevTitle").onclick = function() {
  toggleText("webDevText");
};

document.getElementById("mobileDevTitle").onclick = function() {
  toggleText("mobileDevText");
};

document.getElementById("jobTitle").onclick = function() {
  toggleText("jobText");
};


function toggleText(id) {
  var textElement = document.getElementById(id);
  if (textElement.style.display === "none" || textElement.style.display === "") {
      textElement.style.display = "block";  // Menampilkan teks
      textElement.style.maxHeight = textElement.scrollHeight + "px";  // Menyesuaikan tinggi teks sesuai konten
      textElement.style.opacity = "1";      // Menampilkan teks dengan transisi opacity
  } else {
      textElement.style.maxHeight = "0";   // Menyembunyikan teks
      textElement.style.opacity = "0";     // Menyembunyikan teks secara perlahan
      setTimeout(function() {
          textElement.style.display = "none";  // Menyembunyikan elemen setelah transisi selesai
      }, 500);  // Waktu harus sama dengan durasi transisi
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var splideTesti = new Splide('.splide-testi', {
      // classes:{
      //     arrows: 'nav-arrows',
      //     arrow: 'nav-arrow',
      //     next: 'next-arrow',
      //     prev: 'prev-arrow',
      // },
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '2rem',
      // pagination: false,
      // arrows: false, // Default arrows are disabled, we'll use custom ones
  }).mount();
});
