navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;

const video = document.getElementById('video');
const audio = document.getElementById('audio');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video).then(status => {
    if(status) {
        navigator.getUserMedia({video: {}}, stream => {
            video.srcObject = stream;
        },
        err => console.log(err)
        );
    }
});

handTrack.load().then(lmodel => {
    model = lmodel;
});