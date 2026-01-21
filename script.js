// 1. PRELOADER (ІНТРО)
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2500); // Час показу заставки (2.5 сек)
});

// 2. АНІМАЦІЇ AOS
AOS.init({ duration: 1000, once: true, offset: 50 });

// 3. ТАЙМЕР (14.08.2026)
const weddingDate = new Date("August 14, 2026 15:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance < 0) return;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);

// 4. МУЗИКА (ЗНАЧОК НОТИ)
function toggleMusic() {
    const audio = document.getElementById('my-audio');
    const fab = document.querySelector('.music-fab');
    
    if (!audio) return;

    if (audio.paused) {
        audio.play().then(() => {
            fab.classList.add('playing');
        }).catch(e => {
            alert("Натисніть ще раз, щоб грала музика! 🎵");
        });
    } else {
        audio.pause();
        fab.classList.remove('playing');
    }
}
