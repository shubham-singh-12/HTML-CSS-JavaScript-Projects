// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


// LIST OF SONGS.
let songs = [
    {
        songName: "Warriyo - Mortals",
        filePath: "./assets/songs/1.mp3",
        coverPath: "./assets/images/1.jpg"
    },
    {
        songName: "Cielo - Huma-Huma",
        filePath: "./assets/songs/2.mp3",
        coverPath: "./assets/images/2.jpg"
    },
    {
        songName: "DEAF KEV - Invincible",
        filePath: "./assets/songs/3.mp3",
        coverPath: "./assets/images/3.jpg"
    },
    {
        songName: "Different Heaven & EH!DE",
        filePath: "./assets/songs/4.mp3",
        coverPath: "./assets/images/4.jpg"
    },
    {
        songName: "Janji-Heroes-Tonight",
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

// HANDLE PROGRESSBAR TO PLAY SONG FROM BETWEEN IF CLICK ANYWHERE IN PROGRESSBAR.
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};

// FUNCTIONALITY OF PLAY BUTTONS ON SONG LIST.
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

// FUNCTIONALITY OF NEXT BUTTON IN PROGRESSBAR.
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


// FUNCTIONALITY OF PREVIOUS BUTTON ON PROGESSBAR.
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});