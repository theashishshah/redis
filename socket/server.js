const net = require("net");

const server = net.createServer((socket) => {
    console.log("Asymmetric handshake");

    socket.write("Hello, server."); // this data is send to client
    // socket.on((data) => {
    //     console.log("Client is sending data", data);
    // });
});

server.listen(9000, () => {
    console.log("listening on port 9000");
});
