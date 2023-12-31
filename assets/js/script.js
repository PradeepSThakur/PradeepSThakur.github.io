'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



let currentIndex = 0;
const items = document.querySelector('.carousel-wrapper');
const totalItems = document.querySelectorAll('.carousel-item').length;

document.querySelector('.next').addEventListener('click', function () {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const newPosition = -currentIndex * 100 + '%';
  items.style.transform = 'translateX(' + newPosition + ')';
}

document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.carousel-wrapper');
  let currentIndex = 0;
  let isPaused = false;

  function nextSlide() {
    if (!isPaused) {
      currentIndex = (currentIndex + 1) % wrapper.children.length;
      const translateValue = -currentIndex * 100 + '%';
      wrapper.style.transform = 'translateX(' + translateValue + ')';

      // Reset to the first item after reaching the last one
      if (currentIndex === 0) {
        setTimeout(() => {
          wrapper.style.transition = 'none';
          wrapper.style.transform = 'translateX(0)';
          void wrapper.offsetWidth; // Trigger reflow
          wrapper.style.transition = 'transform 0.5s ease-in-out';
        }, 500); // Use the same duration as your transition
      }
    }
  }

  setInterval(nextSlide, 2000);

  // Pause on click
  const items = document.querySelectorAll('.carousel-item');

  items.forEach(item => {
    item.addEventListener('click', function () {
      isPaused = !isPaused;
      if (!isPaused) {
        // Resume transitioning
        nextSlide();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the filter buttons and the workshops & conferences content
  var filterButtons = document.querySelectorAll('.filter-item button');
  var workshopsConferencesContent = document.getElementById('workshops-conferences-content');

  // Initially hide the workshops & conferences content
  workshopsConferencesContent.style.display = 'none';

  // Add click event listener to each filter button
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Check if the clicked button is the "Workshops & Conferences" button
      var isWorkshopsConferencesButton = button.innerText.trim() === 'Workshops & Conferences';

      // Toggle the visibility of the workshops & conferences content
      workshopsConferencesContent.style.display = isWorkshopsConferencesButton ? 'block' : 'none';
    });
  });
});




