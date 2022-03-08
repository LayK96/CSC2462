let osc1;
let osc2;
let multi;
let lfo;
let filter;

let envelope;
let envelope22;
let noise;
let img;
let button;

function preload() {
  img = loadImage("assets/tank.png");
}

function setup() {
  createCanvas(800, 800);
  background(200);

  
  envelope2 = new Tone.AmplitudeEnvelope().toDestination();
  lfo = new Tone.LFO(5, 200, 1000).start();
  filter = new Tone.Filter(100, "lowpass").connect(envelope2);
  lfo.connect(filter.frequency);
  noise = new Tone.Noise("pink").connect(filter);
  noise.start();
  //Tank Rolling 
  envelope3 = new Tone.AmplitudeEnvelope({
    attack: 0.5,
    decay: 0.4,
    sustain: 1.0,
    release: 0.8,
  }).toDestination();

  // Initiliaze sound to click
  noise = new Tone.Noise("white").connect(envelope3);

  noise.start();

  //am synth
  osc1 = new Tone.Oscillator(400, "square").start();
  osc2 = new Tone.Oscillator(50, "triangle").start();
  multi = new Tone.Multiply();
  osc1.connect(multi, 0, 0);
  osc2.connect(multi, 0, 0);

  //variable for first envelope
  envelope = new Tone.Envelope({
    attack: 0.3,
    decay: 0.4,
    sustain: 0.3,
    release: 0.1,
  });
}

function draw() {
  fill(0, 50, 0);
  textAlign(10, 10);
}

function soundEvent() {
  envelope2.triggerAttack();
  osc2.frequency.value = 50;
  osc2.frequency.linearRampTo(1000, 1);
  envelope.triggerAttackRelease(1.6, "+0.25");
}

function silence() {
  envelope2.triggerRelease();
}

function mousePressed() {
  Tone.start();
  img.resize(400, 450);
  image(img, 10, 25);
  soundEvent();
}

function mouseReleased() {
  silence();
  clear();
  background(200);
}