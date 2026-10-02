// ==============================
// 모바일 네비게이션 토글 버튼
// ==============================
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    if (btn.innerHTML === 'Menu') {
        btn.innerHTML = 'Close';
    } else {
        btn.innerHTML = 'Menu';
    }
});

// ==============================
// 다크 모드 버튼
// ==============================
const themeBtn = document.querySelector('.btn-theme');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
        themeBtn.innerHTML = '🌙';
    }
});

// ==============================
// 신청 폼 글자 수 세기
// ==============================
const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    if (length >= 180) {
        charCount.classList.add('warm');
    } else {
        charCount.classList.remove('warm');
    }
});

// ==============================
// 디지털 시계 (날짜 + 시각)
// ==============================
const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
    const now = new Date();

    // -- 날짜 --
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

    // -- 시각 --
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = h + ':' + m + ':' + s;
}

updateClock();
setInterval(updateClock, 1000);

// ==============================
// 커리큘럼 탭 메뉴 (오타 수정완료)
// ==============================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((tab) => {
    tab.addEventListener('click', () => {
        // [수정] 'avtive' 오타를 'active'로 올바르게 교체
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((b) => b.classList.remove('active'));

        // 클릭한 버튼과 그 버튼의 data-tab 값과 일치하는 id의 패널에 active 추가
        tab.classList.add('active');
        const targetPanel = document.getElementById(tab.dataset.tab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// ==============================
// 스터디 사진 갤러리
// ==============================
const galleryMain = document.querySelector('.gallery-main');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        // 큰 이미지의 주소(src)와 설명(alt)을 클릭한 썸네일 것으로 바꾼다.
        galleryMain.src = thumb.src;
        galleryMain.alt = thumb.alt;

        // 선택 표시(active)클릭한 썸네일로 옮긴다.
        galleryThumbs.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
    });
});