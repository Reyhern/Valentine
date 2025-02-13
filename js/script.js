document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const queue = document.getElementById('playlistQueue');

    document.querySelectorAll('.event').forEach(event => {
        event.addEventListener('click', function() {
            const images = this.dataset.images.split(',');
            const song = this.dataset.song;

            // Update gallery
            const galleryContainer = document.getElementById('galleryContainer');
            galleryContainer.innerHTML = images.map(img => 
                `<img src="${img}" alt="Memory" class="gallery-img" style="width: 100%; border-radius: 8px;">`
            ).join('');

            // Update audio player
            audioPlayer.innerHTML = `<source src="${song}" type="audio/mpeg">`;
            audioPlayer.load();
            audioPlayer.play().catch(error => console.log('Auto-play prevented'));
            
            // Update playlist queue
            queue.innerHTML += `<div class="song-item">🎵 ${song.split('.')[0]}</div>`;
        });
    });

    window.showSurprise = function() {
        // Confetti effect
        for(let i = 0; i < 100; i++) {
            createConfetti();
        }
        alert("You're the best thing that ever happened to me! 💖");
    };

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}deg, 100%, 50%)`;
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        document.body.appendChild(confetti);

        // Animation
        confetti.animate([
            { transform: 'rotate(0deg) translateY(0)', opacity: 1 },
            { transform: `rotate(${Math.random() * 360}deg) translateY(${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove();
    }
});