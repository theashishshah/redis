import client from "../client.js";

let jobId = 0;

while (true) {
    const job = {
        jobId: ++jobId,
        email: `user${jobId}@service.mail.com`,
        task: "send mail to user"
    }

    const queuelen = await client.lpush("email_service", JSON.stringify(job))

    if (queuelen === 1) {
        await client.expire("email_service", 60)
    }

    console.log(`Job is added in queue: ${queuelen}`)

    await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 2 * 1000)
    })
}