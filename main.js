//video

const player = document.querySelector(".player");
const playerStart = document.querySelector(".player__play");
const video = document.querySelector(".player__elem");
const playerPlaybackBtn = document.querySelector(".player__playback-btn");
const playerPlayback = document.querySelector(".player__playback");
const playerMute = document.querySelector(".player__vol");
const playerVolume = document.querySelector(".player__volume");
const playerVolumeBtn = document.querySelector(".player__volume-btn");

playerStart.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        player.classList.add("player--active");
    } else {
        video.pause();
        player.classList.remove("player--active");
    }
});

video.addEventListener("play", () => {
    player.classList.add("player--active");
});

video.addEventListener("timeupdate", (event) => {
    const completedSec = video.currentTime;
    const completedPercent = (completedSec / video.duration) * 100;
    playerPlaybackBtn.style.left = `${completedPercent}%`;
});

video.addEventListener("ended", function () {
    video.currentTime = 0;
    player.classList.remove("player--active");
});

playerPlayback.addEventListener("click", (e) => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerTimeSec = (video.duration / 100) * buttonPosPercent;
    playerPlaybackBtn.style.left = `${buttonPosPercent}%`;
    video.currentTime = newPlayerTimeSec;
});

playerMute.addEventListener("click", () => {
    video.volume = !video.volume;
    const volPos = video.volume ? 100 : 0;
    playerVolumeBtn.style.left = `${volPos}%`;
});

playerVolume.addEventListener("click", (e) => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerVolume = (1 / 100) * buttonPosPercent;
    playerVolumeBtn.style.left = `${buttonPosPercent}%`;
    console.log(newPlayerVolume);
    video.volume = newPlayerVolume;
});

//modal

const modalBtn = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

modalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.toggle("modal_active");
    body.classList.toggle("body_closed");
});
