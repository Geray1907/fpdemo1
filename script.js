fetch("john.json")
  .then(response => response.json())
  .then(data => {
    window.modalData = data; 
  });

 
  

/* night mode */

const checkbox = document.querySelector(".checkbox");
const headerConta = document.querySelector("header");
const icon = document.querySelector(".iconBox");
const logo = document.querySelector("header .logoConta h1");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    headerConta.style.backgroundColor = "rgb(26, 26, 26)";
    icon.style.color = "white";

    localStorage.setItem('nightThemeEnabled', 'true');
  } else {
    headerConta.style.backgroundColor = "white";
    icon.style.color = "black";
    if (logo) {
      logo.style.color = "black";
    }

    localStorage.setItem('nightThemeEnabled', 'false');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nightThemeEnabled = localStorage.getItem('nightThemeEnabled');

  if (nightThemeEnabled === 'true') {
    checkbox.checked = true;
    headerConta.style.backgroundColor = "rgb(26, 26, 26)";
    icon.style.color = "white";
  } else {
    checkbox.checked = false;
    headerConta.style.backgroundColor = "white";
    icon.style.color = "black";
    if (logo) {
      logo.style.color = "black";
    }
  }
});

/* people data */

const modalConta = document.querySelector(".modalConta");
const closeX = document.querySelector(".closeX");

function showInfo(data) {
  const modalContaInfo = document.createElement('div');
  modalContaInfo.classList.add('modalContaInfo');
  modalContaInfo.innerHTML = `
    <h1 class="nameDetails">${data.name}</h1>
    <div class="projectsDetails"><span>Projects:</span> ${data.projects}</div>
    <div class="personDetails">${data.details}</div>
  `;
  return modalContaInfo;
}

const sectionSixBtns = document.querySelectorAll("#sectionSix .infoConta button");
sectionSixBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const personData = window.modalData.info[index];
    const oldInfo = modalConta.querySelector(".modalContaInfo");
    if (oldInfo) {
      modalConta.removeChild(oldInfo);
    }
    const newInfo = showInfo(personData);
    modalConta.appendChild(newInfo);
    modalConta.style.display = "flex";
  });
});

closeX.addEventListener("click", () => {
  modalConta.style.display = "none";
});


/* swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

