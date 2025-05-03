function setup() {
  createCanvas(400, 400);
}

let xjogador = [0, 0, 0, 0];
let yjogador = [75, 150, 225, 300];
let jogadores = ["🍓", "🍇", "🍍", "🍉"];
let qtd = jogadores.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  keyReleased();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < qtd; i++) {
    text(jogadores[i], xjogador[i], yjogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
  rect(350, 0, 10, 10);
}
let teclas = ["a", "x", "l", "m"];

function keyReleased() {
  for (let i = 0; i < 4; i++) {
    if (key == teclas[i]) {
      xjogador[i] += 1;
    }
  }
}

function verificaVencedor() {
  for (let i = 0; i < qtd; i++) {
    if (xjogador[i] > 350) {
      text(jogadores[i] + " venceu!!!", 20, 200);
      noLoop();
    }
  }
}
