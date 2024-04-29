var socket = io("192.168.1.66:3000", {transports: ["websocket"]});

function create_user(email, name) {
  socket.emit("create_user", {email: email, name: name});
}
