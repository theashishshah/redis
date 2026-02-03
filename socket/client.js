const net = require("net");

const client = net.createConnection(
    {
        port: 9000,
        host: "localhost",
    },
    () => {
        console.log("This is success call back");
    }
);

client.on("data", (data) => {
    console.log("coming from server", data.toString());
});
