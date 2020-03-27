const vibes = [
  "... Thanks for being helpful.",
  "... Allah is Great."
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);