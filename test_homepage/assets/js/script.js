// 배경 이미지 설정 함수
function setBackgroundImage() {
    const body = document.body;
    const page = window.location.pathname.split("/").pop();

    const backgrounds = {
        'index.html': "url('assets/img/bg1.jpg')",
        'detail.html': "url('assets/img/bg2.jpg')",
        'sign_in.html': "url('assets/img/bg3.jpg')",
        'sign_up.html': "url('assets/img/bg4.jpg')",
        // 추가적인 페이지에 대한 배경 이미지 설정
        'default': "url('assets/img/default_bg.jpg')"
    };

    body.style.backgroundImage = backgrounds[page] || backgrounds['default'];
}

// 링크에 마우스 오버 효과 추가 함수
function addHoverEffect(links) {
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-5px)'; // 위로 이동
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)'; // 원래 위치로 복귀
        });
    });
}

// DOMContentLoaded 이벤트 리스너
document.addEventListener("DOMContentLoaded", () => {
    setBackgroundImage(); // 배경 이미지 설정
    const links = document.querySelectorAll('.navbar a');
    addHoverEffect(links); // 링크에 마우스 오버 효과 추가
});
