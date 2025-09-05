const songs = [
    'ΛΕΞ - ΚΟΡΑΚΙΑ.mp3',
    'ΛΕΞ - ΜΠΟΜΠΑΝ.mp3',
    'ΛΕΞ - ΠΑΥΣΙΠΟΝΑ.mp3',
    'ΛΕΞ - 2017.mp3',
    'ΛΕΞ - ΓΡΑΝΙΤΕΣ ΚΑΙ ΤΣΙΓΑΡΑ.mp3',
    'ΛΕΞ - ΔΙΑΣΤΗΜΟΠΛΟΙΑ.mp3',
    'ΛΕΞ-ΚΡΙΜ.mp3',
    'ΛΕΞ - VITTORIO.mp3'
];
const titles = ['Korakia', 'Mpompan', 'Pafsipona','2017','Granites kai tsigara','Diastimoploia','Krim','Vittorio'];

let songIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const playIcon = play.querySelector('i');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');


function loadSong(index){
    title.innerText = titles[index];
    audio.src = 'assets/' + songs[index];
}


loadSong(songIndex);


function playSong(){
    audio.play().then(() => playIcon.className = 'ri-pause-line');
}


function pauseSong(){
    audio.pause();
    playIcon.className = 'ri-play-line';
}


play.addEventListener('click', ()=>{
    if(audio.paused){
        playSong();
    } else {
        pauseSong();
    }
});


next.addEventListener('click', ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    playSong();
});


prev.addEventListener('click', ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    playSong();
});


audio.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    playSong();
});


audio.addEventListener('timeupdate', () => {
    if(audio.duration){
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';

        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});


function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}
