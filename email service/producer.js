import client from "../client.js";

let jobID = 0

setInterval(async () => {
    // create a job to queue
    const job = {
        jobId: ++jobID,
        task: "send email",
        email: `user${jobID}@service.mail.com`
    }

    const len = await client.lpush("email_service", JSON.stringify(job))
    console.log(`Job with job ID: ${jobID} added in queue. Current len of queue: ${len}`)
    
    // Syntax: await client.lpush("collection_name", "value"): return len

 }, 1 * 2000)

