let button;
let slider; 
let synth;
let keyDisplay = [];

const notes = {a:"C4",w:"C#4", s:"D4",e:"D#4",d:"E4",r:"E#4",f:"F4",t:"F#4",g:"G4",y:"G#4",h:"A5",u:"A#5",j:"B5",i:"B#5",k:"C5" };

function setup(){
  createCanvas(500,500);
  background("lightgreen");
  
  var score = [
    ["E4","E4","E4","C4","E4"],
    "G4",
    "G3",
    "C4",
    "G3",
    "E3",
    ["A4","B4"],
    ["A#4", "A4"],
    ["G3", "E4", "G4"],
    ["A4", "F4","G4"],
    "E4",
    ["C4","D4"],
    "B4",
  ];

  synth = new Tone.PolySynth().toDestination();

  sequence = new Tone.Sequence(
    (time, note) => {synth.triggerAttackRelease(note, "8n", time);},
    score,1 );
  
  startPart = createButton("start sequence")
    .position(50,80)
    .mousePressed(() => {
      Tone.start();
      sequence.start();
    });
  
  stopPart = createButton("stop sequence")
    .position(50,100)
    .mousePressed(() => sequence.stop());

  Tone.Transport.start();

  probability= createSlider(0,1,1,0).position(50,120);
  slider = createSlider(40,200,120,0);
  slider.position(50,60);

}

function draw(){
  clearInterval();
  background("lightgreen");

  textSize(64);
  text(keyDisplay, 20, 250);

  textSize(8);
  text("keyboard is mapped as " + JSON.stringify(notes, null, 4), 20, 300);

  textSize(16);

  Tone.Transport.bpm.value = slider.value();
  text("BPM " + Tone.Transport.bpm.value.toFixed(0), 45, 50);

  text("Sequence probability " + sequence.probability.toFixed(1), 45, 140);
  sequence.probability = probability.value();

  //Now to make a keyboard

}

//Function to play piano note

function keyPressed() {
  for (const [keyInNotes, note] of Object.entries(notes)) {
    if (key == keyInNotes) {
      synth.triggerAttack(note);
      keyDisplay.push(note.replace("4", ""));
    }
  }
}

function keyReleased(key) {
  for (const [keyInNotes, note] of Object.entries(notes)) {
    if (key.key == keyInNotes) {
      keyDisplay = keyDisplay.filter((item) => item !== note.replace("4", ""));
      synth.triggerRelease(note);
    }
  }
}

