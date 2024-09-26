document.getElementById('startButton').addEventListener('click', function () {
    document.body.classList.remove('no-scroll');
    document.querySelectorAll('section').forEach(section => section.classList.remove('hidden'));

    // Scroll ke section "invitation"
    const invitationSection = document.getElementById('invitation');
    invitationSection.scrollIntoView({ behavior: 'smooth' });

    // Putar musik
    const music = document.getElementById('music');
    music.play(); // Memutar musik
});

// Countdown Timer
const countdownDate = new Date("2024-12-31T00:00:00").getTime(); // Ganti dengan tanggal pernikahan Anda

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = hours + " Jam " + minutes + " Menit " + seconds + " Detik ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Waktu Habis!";
    }
}, 1000);

// Form Komentar
document.getElementById('commentsForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = event.target[0].value;
    const comment = event.target[1].value;

    const commentContainer = document.getElementById('commentsContainer');
    const newComment = document.createElement('div');
    newComment.className = "border-b border-gold mb-2 py-2";
    newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

    commentContainer.appendChild(newComment);

    // Reset form
    event.target.reset();
});
