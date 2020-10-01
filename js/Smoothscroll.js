const body = document.body;
const main = document.querySelector('main');
let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;



window.addEventListener('scroll', scroll);

function scroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  main.style.transform = `translate(-${dx}px, -${dy}px)`;
  
  window.requestAnimationFrame(render);
}

function lerp(a, b, n) {
  return (1.03 - n) * a + n * b;
}