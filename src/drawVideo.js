let socket = io("localhost:3000")
export let drawVideo = (video) => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  let videoWidth = video.width;
  let videoHeight = video.height;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;


  let draw = () => {
    ctx.clearRect(0, 0, videoWidth, videoHeight);
    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-videoWidth, 0);
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    let imgData = canvas.toDataURL("data/jpeg");
    socket.emit("image", imgData);
    ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
}
