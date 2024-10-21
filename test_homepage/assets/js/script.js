function setBackgroundImage() {
    const body = document.body;
    const page = window.location.pathname.split("/").pop();

    const backgrounds = {
        'index.html': "url('assets/img/bg1.jpg')",
        'detail.html': "url('assets/img/bg2.jpg')",
        'sign_in.html': "url('assets/img/bg3.jpg')",
        'sign_up.html': "url('assets/img/bg4.jpg')",
        'default': "url('assets/img/default_bg.jpg')"
    };

    body.style.backgroundImage = backgrounds[page] || backgrounds['default'];
}

function addHoverEffect(links, cards) {
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-5px)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setBackgroundImage();
    const links = document.querySelectorAll('.navbar a');
    addHoverEffect(links);
    const cards = document.querySelectorAll('.card');
    addHoverEffect(cards);
});
