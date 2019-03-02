import {openStream,playVideo} from './openStream'

let video, stream;
let peer = new Peer({key: 'lwjd5qra8257b9'});
let loadpage = async () => {
  video = document.getElementById("video");
  stream = await openStream();
  playVideo(stream);
}
loadpage();

$(document).ready(() => {
  $("#call").click(() => {
    let id = $("#peerId").val();
    let call = peer.call(id, stream)
  });
});
