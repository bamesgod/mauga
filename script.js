const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const responseMessage = document.getElementById("responseMessage");

// Fungsi tombol "Tidak" menghindar
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Fungsi tombol "Ya"
yesBtn.addEventListener("click", function() {
    responseMessage.textContent = "Yay! Sekarang kita jadian! ❤️🥰";
});