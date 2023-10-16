const btn = document.querySelector('button.button-mobile-menu');
const menu = document.querySelector('.mobile-menu')

btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})

function toggleFoudre() {
    document.getElementById('foudre').classList.toggle('hidden')
}

function toggleSale() {
    document.getElementById('sale').classList.toggle('hidden')
}

function toggleCrimes() {
    document.getElementById('crimes').classList.toggle('hidden')
}

function toggleTango() {
    document.getElementById('tango').classList.toggle('hidden')
}


$('.btntop').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.top').eq(0).offset().top
    }, 800);
});

$('.btndown').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.down').eq(0).offset().top
    }, 800);
});