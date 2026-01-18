import client from "../client.js";

console.log("Email service has started...");

while (true) {
    const ele = await client.lpop("email_service")
    const job = JSON.parse(ele)

    console.log(`Email is sent to user with email ${job.email}`)

    await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 2 * 1000)
    })
}