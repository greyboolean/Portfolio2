const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

/* Menu */

// Open and close menu
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})
navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
})

// Remove menu when menu item is clicked
navLink.forEach(e => {
    e.addEventListener('click', () => navMenu.classList.remove('show-menu'))
})

/* Skills */

const skillsContent =  document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close';
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }

}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/* Qualifications */

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        });
        target.classList.add('qualification-active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification-active');
        });
        tab.classList.add('qualification-active');
    });
});

/* Services */

const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

function modal(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal');
//         })
//     })
// })
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', element => {
        const serviceModal = element.target.parentNode.parentNode;
        serviceModal.classList.remove('active-modal');
    })
})

// /* Portfolio */

// // let swiper = new Swiper('.portfolio-container', {
// //     cssMode: true,
// //     navigation: {
// //         nextE: '.swiper-button-next',
// //         prevEl: '.swiper-button-prev',
// //     },
// //     pagination: {
// //         el: '.swiper-pagination'
// //     },
// //     mousewheel: true,
// //     keyboard: true,
// // });
// let swiperPortfolio = new Swiper('.portfolio-container', {
//     cssMode: true,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

// /* Testimonial */

// let swiperTestimonial = new Swiper('.testimonial-container', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568: {
//             slidesPerView: 2,
//         }
//     }
// });

/* Scroll Section */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(element => {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        sectionId = element.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/* Scroll Header */

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* Scroll Up */

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scrolltop');
    } else {
        scrollTop.classList.remove('show-scrolltop');
    }
}

window.addEventListener('scroll', scrollTop);

/* Theme Toggle */

// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
// }

// themeButton.addEventListener('click', () => {
//         document.body.classList.toggle(darkTheme);
//         themeButton.classList.toggle(iconTheme);
//         localStorage.setItem('selected-theme', getCurrentTheme());
//         localStorage.setItem('selected-icon', getCurrentIcon());
// })
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const icon = 'uil-sun';

function changeTheme() {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(icon);
}

const selectedTheme = localStorage.getItem('selected-theme');
if (selectedTheme) {
    if (selectedTheme === 'dark') {
        changeTheme();
    }
}

themeButton.addEventListener('click', () => {
        changeTheme();
        let currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        localStorage.setItem('selected-theme', currentTheme);
        console.log(localStorage.getItem('selected-theme'));
})

/* Portfolio */

const swiperPortfolio = new Swiper('.portfolio-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/* Testimonial */

var swiper = new Swiper(".testimonial-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});