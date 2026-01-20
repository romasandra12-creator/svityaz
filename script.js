// 1. Ініціалізація анімацій (AOS)
// Це змушує блоки плавно з'являтися при прокручуванні
AOS.init({
    duration: 1200, // Тривалість анімації (1.2 секунди)
    once: true,     // Анімація програється лише один раз
    offset: 50      // Починати анімацію трохи раніше, ніж блок з'явиться повністю
});

// 2. Таймер зворотного відліку
// Дата весілля: 14 Серпня 2026, 15:00
const weddingDate = new Date("August 14, 2026 15:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Якщо дата настала
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "<div style='font-size:1.5rem'>ВЕСІЛЛЯ СЬОГОДНІ!</div>";
        return;
    }

    // Розрахунок часу
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Виведення на екран
    // Перевіряємо, чи існують елементи, щоб уникнути помилок
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
    }
}, 1000);

// 3. Управління музикою та еквалайзером
function toggleMusic() {
    const audio = document.getElementById('my-audio');
    const bars = document.getElementById('music-bars'); // Це наші палички еквалайзера
    
    if (!audio) return;

    if (audio.paused) {
        // Спроба запустити музику
        audio.play().then(() => {
            // Якщо запустилася успішно — додаємо клас для анімації паличок
            bars.classList.add('playing');
        }).catch(error => {
            console.log("Автозапуск заблоковано:", error);
            alert("Торкніться екрану ще раз, щоб запустити музику! 🎵");
        });
    } else {
        // Пауза
        audio.pause();
        // Зупиняємо анімацію паличок
        bars.classList.remove('playing');
    }
}
