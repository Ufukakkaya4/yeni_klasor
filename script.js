document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebrationDiv = document.getElementById('celebration');

    // Evet butonunun başlangıç konumunu belirle (CSS ile de yapabilirsin)
    yesBtn.style.position = 'absolute';
    yesBtn.style.left = '45%'; // Ekranın ortasına yakın
    yesBtn.style.top = '60%';  // Ortaya yakın

    // Hayır butonunun başlangıç konumunu belirle
    noBtn.style.position = 'absolute';
    noBtn.style.left = '55%'; // Ekranın ortasına yakın
    noBtn.style.top = '60%';  // Ortaya yakın

    noBtn.addEventListener('mouseover', () => {
        const bodyWidth = window.innerWidth;
        const bodyHeight = window.innerHeight;
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        // Rastgele yeni konumlar hesapla
        // Butonun ekran dışına taşmaması için sınırlar belirle
        const newLeft = Math.random() * (bodyWidth - buttonWidth - 40) + 20; // 20px padding
        const newTop = Math.random() * (bodyHeight - buttonHeight - 40) + 20; // 20px padding

        noBtn.style.left = `${newLeft}px`;
        noBtn.style.top = `${newTop}px`;
    });

    yesBtn.addEventListener('click', () => {
        document.querySelector('.container').classList.add('hidden'); // Başlık ve butonları gizle
        celebrationDiv.classList.remove('hidden'); // Kutlama mesajını göster
    });
});
