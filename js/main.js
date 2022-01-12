


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

// Open Header Automatic
setTimeout(openHeaderAuto, 1500);

function openHeaderAuto () {
    header.classList.add('header-open');
    function closeHeaderAuto () {
    header.classList.remove('header-open');
    }
    // Close Header Automatic
    setTimeout(closeHeaderAuto, 1300)
}

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
