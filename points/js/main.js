let canvas = document.querySelector("#atelier");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let directions_x = ["gauche", "droite"];
let directions_y = ["haut", "bas"];

let balles = [];

for (let i = 0; i < 50; i++) {
  let balle = {
    x: aleatoire_entier(50, canvas.width - 50),
    y: aleatoire_entier(50, canvas.height - 50),
    vx: aleatoire(-1.5, 1.5),
    vy: aleatoire(-1.5, 1.5),
    w: 0,
    couleur: "#fff",
  };

  balles.push(balle);
}

setInterval(function () {
  // Exécuté à répétition (60 fois par seconde)

  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "rgba(0,0,0,0.9)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let balle of balles) {
    updateBalle(balle);
    dessinerBalle(balle);
  }
}, 1000 / 60);

function updateBalle(balle) {
  balle.x += balle.vx;
  balle.y += balle.vy;

  // Rebond droite
  // Rebond gauche
  if (balle.x > canvas.width || balle.x < 0) {
    balle.vx = -balle.vx;
  }

  // Rebond bas
  // Rebond haut
  if (balle.y > canvas.height || balle.y < 0) {
    balle.vy = -balle.vy;
  }
}

function dessinerBalle(balle) {
  ctx.fillStyle = balle.couleur;
  ctx.beginPath();
  ctx.arc(balle.x, balle.y, balle.w / 2, 0, Math.PI * 2);
  ctx.fill();

  for (let autre_balle of balles) {
    let dist = distance(balle.x, balle.y, autre_balle.x, autre_balle.y);

    if (dist < 300) {
      ctx.strokeStyle = "#90EE90";
      ctx.beginPath();
      ctx.moveTo(balle.x, balle.y);
      ctx.lineTo(autre_balle.x, autre_balle.y);
      ctx.stroke();
    }
  }
}
