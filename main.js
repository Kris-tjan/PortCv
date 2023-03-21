let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}


var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  function validate() {
    let name = document.querySelector(".name")
    let email = document.querySelector(".emale")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail (naem.value, email.value, msg.value);
            success();
        }
    });
  }
  validate();

  function sendmail(name,email,msg){
    emailjs.send("service_6peeczz","template_zp9t20b",{
        from_name: email,
        to_name: name,
        message: msg,
        });
  }

  function emptyerror() {
  swal({
    title: "Oh Nooo....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function emptyerror() {
    swal({
      title: "Email sent successfully",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
  }
  
  let header = document.querySelector('header')

  window.addEventListener('scrool', () => {
    header.classList.toggle("header-active", window.scrollY > 0);
  });

  let scrollTop = document.querySelector('.scroll-top')

  window.addEventListener('scrool', () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400);
  });