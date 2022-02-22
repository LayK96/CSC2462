let button;
let slider;
let count = 1;
let effect;
let sounds = {
  android: "assets/Android.mp3",
  stopTheCap: "assets/Stop-The-Cap.mp3",
  boom: "assets/Vine-Boom.mp3",
  dontClick: "assets/got-eem.mp3",
  yeet: "assets/yeet.mp3",
  HomeResonance: "assets/Home-Resonance.mp3",
  Break: "assets/Want-A-Break-From-The-ADs.mp3"
};

function setup() {
  createCanvas(500, 500);
  background("lightgreen");

  chorus = new Tone.Chorus();
  pitchShift = new Tone.PitchShift();
  const multiplayer = new Tone.Players(sounds);
  multiplayer.volume.value = -20;
  multiplayer.chain(chorus, pitchShift, Tone.Master);

  for (const [key, value] of Object.entries(sounds)) {
    button = createButton(key);
    button.position(20, 20 * count);
    button.mousePressed(() => {
      multiplayer.player(key).start();
    });
    count++;
  }
  textSize(10);
  text("click an audio sample to play sounds \nclick, drag, and hold the slider to add effect", 110, 30);
  
  text("CHORUS - \nadds stadium effect \nto audio", 35, 400);
  chorusSlider = createSlider(0, 100, 0);
  chorusSlider.position(20, 300);
  chorusSlider.style("transform", "rotate(-90deg)");


  text(
    "PITCH SHIFT - \nUp on slider to slow \nDown on Slider for normal speed",
    160,
    400
  );
  pitchShiftSlider = createSlider(0, 100, 0);
  pitchShiftSlider.position(110, 300);
  pitchShiftSlider.style("transform", "rotate(-90deg)");
}

function draw() {
  chorus.wet.value = chorusSlider.value() / 100;
  pitchShift.wet.value = pitchShiftSlider.value() / 100;
}