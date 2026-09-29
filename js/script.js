document.addEventListener('DOMContentLoaded', () => {
    // ====================================
    // 모바일 네비게이션 토글
    // ====================================
    const btn = document.querySelector('.btn-menu');
    const nav = document.querySelector('.main-nav');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('open-menu');
            btn.textContent = nav.classList.contains('open-menu') ? 'Close' : 'Menu';
        });

        // 메뉴 클릭 시 모바일 메뉴 자동으로 닫기
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open-menu');
                btn.textContent = 'Menu';
            });
        });
    }

    // ====================================
    // 다크 모드 전환
    // ====================================
    const themeBtn = document.querySelector('.btn-theme');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            themeBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // ====================================
    // 신청 폼 글자 수 실시간 세기
    // ====================================
    const textarea = document.querySelector('.apply-textarea');
    const charCount = document.querySelector('.char-count');

    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            const length = textarea.value.length;
            charCount.textContent = `${length} / 200자`;

            if (length >= 180) {
                charCount.classList.add('warm');
            } else {
                charCount.classList.remove('warm');
            }
        });
    }

    // ====================================
    // 디지털 시계 (날짜 + 시각)
    // ====================================
    const clockDate = document.querySelector('.clock-date');
    const clockTime = document.querySelector('.clock-time');
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    function updateClock() {
        if (!clockDate || !clockTime) return;

        const now = new Date();

        // 날짜 계산 (getMonth()는 0부터 시작하므로 +1 필요)
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const day = days[now.getDay()];

        clockDate.textContent = `${year}년 ${month}월 ${date}일 (${day})`;

        // 시각 계산
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');

        clockTime.textContent = `${h}:${m}:${s}`;
    }

    // 페이지 접속 시 즉시 1회 실행 후 1초마다 반복
    updateClock();
    setInterval(updateClock, 1000);
});