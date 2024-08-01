// HAMBURGER MENU

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



//BANNER SLIDE 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// CONTACT FORM

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pilihan = document.getElementById('pilihan').value;
  const pesan = document.getElementById('pesan').value;

  if (nama === '' || email === '' || pilihan === '' || pesan === '') {
    alert('Mohon isi semua field!');
    return;
  }

  // VALIDASI EMAIL
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Email tidak valid!');
    return;
  }

  // KIRIM FORM
  console.log('Form berhasil dikirim!');
  alert('Terima kasih telah mengisi form!');

  // RESET FORM
  form.reset();
});

