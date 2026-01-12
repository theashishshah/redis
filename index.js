import client from "./client.js";

async function init() {
    const result = await client.mget("name:1", "name:2");
    console.log("Result", result);

    client.disconnect();
}

init();
