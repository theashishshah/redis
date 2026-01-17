import client from "../client.js"

console.log("Queue service is started...")

while (true) {
    const element = await client.blpop("email_service", 15)
    console.log("element: ", element)
    const job = JSON.parse(element[1])
    // console.log(job)
    console.log(`Email is sent to user on email: ${job.email}`)

    await new Promise((res, rej) => {
        setTimeout(() => {res()}, 1 * 1000)
    })
}
