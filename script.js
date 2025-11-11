document.getElementById('surprise').addEventListener('click', () => {
  const audio = document.getElementById('music');
  audio.play();
  startConfetti();
  alert("🎉 Happy Birthday! Wishing you endless happiness ❤️");
});

// Simple confetti effect using canvas
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function randomColor() {
  const colors = ['#ff69b4', '#ffd700', '#87cefa', '#ffb6c1'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      color: randomColor(),
      speed: Math.random() * 3 + 2,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
}

function updateConfetti() {
  confettis.forEach(c => {
    c.y += c.speed;
    if (c.y > canvas.height) c.y = -10;
  });
}

function loop() {
  drawConfetti();
  updateConfetti();
  requestAnimationFrame(loop);
}

function startConfetti() {
  createConfetti();
  loop();
}
