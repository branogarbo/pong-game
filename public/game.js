//////////// socket.io client ////////////

let socket = io();

socket.on('connection', ()=>{
   console.log('connected to server');
});

socket.on('update', playerData => {
   
});

//////////// p5 ////////////

// let player = new PlayerPaddle(false);
// let ghost = new PlayerPaddle(true);

let ball;

let { pathName } = location.href;

function setup() {
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   
   ball = new Ball();

}

function draw() {
   background(0);

   // player.display();
   // ghost.display();
   ball.display();

   // player.update();
   // ghost.update();
   ball.update();
}