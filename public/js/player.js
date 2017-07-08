var playerStatus = {};

let status = (id) => playerStatus.hasOwnProperty(id) ? playerStatus[id] : 'NONE';
let toggleSong = (id) => status(id) === 'PLAYING' ? pauseSong(id) : playSong(id);

function playSong(id) {
  playerStatus[id] = 'PLAYING';
  let elem = document.getElementById(id);
  document.getElementById(id + '-player').className = 'glyphicon glyphicon-pause';
  elem.play();
  elem.onended = () => {
    console.log(id + ' ended');
    delete playerStatus[elem];
    document.getElementById(id + '-player').className = 'glyphicon glyphicon-play';
  };
}

function pauseSong(id) {
  playerStatus[id] = 'PAUSE';
  document.getElementById(id + '-player').className = 'glyphicon glyphicon-play';
  document.getElementById(id).pause();
}
