let socket = io("localhost:3000");

socket.on("imgData", imgData => {
  $("#image").attr('src', imgData);
});
