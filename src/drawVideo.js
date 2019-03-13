export let drawVideo = (video) => {
  const videoWidth = video.width;
  const videoHeight = video.height;
  let imgData;
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
