import {loadVideo} from './loadVideo'
import {drawVideo} from './drawVideo'

let socket = io("localhost:3500");
let imgData;
let fps = 10;

let loadpage = async () => {

  let video;
  try {
    video = await loadVideo(300, 300, "video");
  } catch(err) {
    throw err;
  }

  let videoWidth = video.width;
  let videoHeight = video.height;
  let image = document.getElementById("image");
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  canvas.width = videoWidth
  canvas.height = videoHeight


  let draw = () => {
    ctx.clearRect(0, 0, videoWidth, videoHeight);
    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-videoWidth, 0);
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    imgData = canvas.toDataURL("image/jpeg");
    ctx.restore();
    requestAnimationFrame(draw);
  }
  draw();
}

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

loadpage();

setInterval(() => {
  socket.emit("imgData", imgData);
}, 1000/fps);

socket.on("image", imgData => {
  $("#image").attr("src", imgData)
})
