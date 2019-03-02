let peer = new Peer({key: 'lwjd5qra8257b9'});

export let peerCaller = async (stream) => {
  let p = await peer.on('open');
  let call = peer.call(p.id, stream);
  let clienStream = await call.on("stream");
}
