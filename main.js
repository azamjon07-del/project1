
// "use strict";

// let img1 = document.querySelectorAll(".img1");
// let next = document.querySelector(".next");
//et current = document.querySelector("#current");

// for (let i = 0; i < img1.length; i++) {
//   img1[i].style.display = "none";
// }
// img1[i].style.display = "block";

// next.onclick = () => {
//   if (i < 3) {
//     img1[i].style.display = "none";
//     i++;
//     x++;
//     current.textContent = `0${x}`;
//     img1[i].style.display = "block";
//   } else {
//     img1[i].style.display = "none";
//     i = 0;
//     x = 1;
//     current.textContent = `0${x}`;
//     img1[i].style.display = "block";
//   }
// };

// start.onclick = () => {
//   if (i > 0) {
//     img1[i].style.display = "none";
//     i--;
//     x--;
//     current.textContent = `0${x}`;
//     img1[i].style.display = "block";
//   } else {
//     img1[i].style.display = "none";
//     i = 3;
//     x = 4;
//     current.textContent = `0${x}`;
//     img1[i].style.display = "block";
//   }
// }; let start = document.querySelector(".start");
// l
const photo = document.querySelector('.photo');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const photos = Array.from(photo.querySelectorAll('img'));
const photoCount = photos.length;
let photoIndex = 0;



prevBtn.addEventListener('click', showPreviousPhoto);
nextBtn.addEventListener('click', showNextPhoto);



function showPreviousPhoto() {
  photoIndex = (photoIndex - 1 + photoCount) % photoCount;
  updatephoto();
}



function showNextPhoto() {
  photoIndex = (photoIndex + 1) % photoCount;
  updatephoto();
}



function updatephoto() {
  photos.forEach((slide, index) => {
    if (index === photoIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}


updatephoto();







// "https://api.telegram.org/bot7485316229:AAGpTR3dHPq2nHmXePayAJellM0DATVgqXc/getUpdates";

// let TOKEN = "7485316229:AAGpTR3dHPq2nHmXePayAJellM0DATVgqXc";
// let CHAT_ID = "6965482132";
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// let success = document.getElementById("success");

// document.getElementById("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let message = `<b><i>заявка с сайта </i></b>\n`;
//   message += `<b>отправитель:</b> ${this.name.value}\n`;
//   message += `<b>номер:</b> ${this.number.value}\n`;
//   message += `<b>почта:</b> ${this.email.value}`;
//   console.log(message);
//   axios
//     .post(URL_API, {
//       chat_id: CHAT_ID,
//       parse_mode: "HTML",
//       text: message,
//     })
//     .then((res) => {
//       this.name.value = "";
//       this.number.value = "";
//       this.email.value = "";
//       success.innerHTML = "сообщение отправлено";
//       success.style.display = "block";
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => console.log("Seccessfully"));
// });


// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));[1]
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();




"https://api.telegram.org/bot7742159953:AAFYQ05-Apr7_RtQyXRS_Y5sCI2ZlwsmMTk/getUpdates"

let TOKEN = "7742159953:AAFYQ05-Apr7_RtQyXRS_Y5sCI2ZlwsmMTk";
let CHAT_ID = "6965482132";
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;



document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b><i>заявка с сайта </i></b>\n`;
  message += `<b>отправитель:</b> ${this.name.value}\n`;
  message += `<b>номер:</b> ${this.number.value}\n`;
  console.log(message);
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "HTML",
      text: message,
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Seccessfully"));
});





document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b><i>заявка с сайта </i></b>\n`;
  message += `<b>отправитель:</b> ${this.name.value}\n`;
  message += `<b>номер:</b> ${this.number.value}\n`;
  message += `<b>почта:</b> ${this.email.value}\n`;
  message += `<b>дата:</b> ${this.date.value}\n`;
  console.log(message);
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "HTML",
      text: message,
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("Seccessfully"));
});
