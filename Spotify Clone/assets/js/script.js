// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {
        songName: "Warriyo - Mortals [NCS Release]",
        filePath: "./assets/songs/1.mp3",
        coverPath: "./assets/images/1.jpg"
    },
    {
        songName: "Cielo - Huma-Huma",
        filePath: "./assets/songs/2.mp3",
        coverPath: "./assets/images/2.jpg"
    },
    {
        songName: "DEAF KEV - Invincible [NCS Release]-320k",
        filePath: "./assets/songs/3.mp3",
        coverPath: "./assets/images/3.jpg"
    },
    {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath: "./assets/songs/4.mp3",
        coverPath: "./assets/images/4.jpg"
    },
    {
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        filePath: "./assets/songs/5.mp3",
        coverPath: "./assets/images/5.jpg"
    },
    {
        songName: "Rabba - Salam-e-Ishq",
        filePath: "./assets/songs/6.mp3",
        coverPath: "./assets/images/6.jpg"
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq",
        filePath: "./assets/songs/7.mp3",
        coverPath: "./assets/images/7.jpg"
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq",
        filePath: "./assets/songs/8.mp3",
        coverPath: "./assets/images/8.jpg"
    },
    {
        songName: "Tumhari Kasam - Salam-e-Ishq",
        filePath: "./assets/songs/9.mp3",
        coverPath: "./assets/images/9.jpg"
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filePath: "./assets/songs/10.mp3",
        coverPath: "./assets/images/10.jpg"
    },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play / Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listem to Events
audioElement.addEventListener('timeupdate', () => {

    // update Seekbar (ProgressBar)
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
