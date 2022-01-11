
// Header //
let header = document.querySelector('header');
let linksSection = document.querySelectorAll('header ul li');
let openHeader = document.getElementById('open-header');

openHeader.addEventListener('click', () => {
    header.classList.toggle('header-open');
})

linksSection.forEach((el) => {
    el.addEventListener('click', () => {
        header.classList.remove('header-open');
    })
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
})

// Selected Item //
let items = document.querySelectorAll('.item');

items.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('item-select');
    })
});


// Button Go Top //
let goTop = document.querySelector('.go-top');
let home = document.querySelector('.home');

window.addEventListener('scroll', () => showHeade(goTop));
goTop.addEventListener('click', () => home.scrollIntoView())

function showHeade (el) {
    if (window.pageYOffset >= window.innerHeight + 150) {
        el.classList.add('show');
    } else {
        el.classList.remove('show');
    }
}

// PopUp Out Time
let PopUp = document.getElementById('time-out');
let body = document.querySelector('body');
let iconClose = document.querySelector('#time-out > i');
let dat = new Date();

if (dat.getHours() < 16 && dat.getHours() > 2) {
    openPopUp(PopUp);
} else {
    closePopUp(PopUp);
}

iconClose.addEventListener('click', () => {
    PopUp.className.add('none');
})

function openPopUp(el) {
    el.style.display = 'flex';
    el.classList.remove('none');
}
function closePopUp(el) {
    el.style.display = 'none';
    el.classList.add('none');
}
