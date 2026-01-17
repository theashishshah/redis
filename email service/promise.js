function success(value) {
    console.log("This is success callback of a promise", value)
}

function failure(error) {
    console.log("This is fauilure callback of a promise", error)
}

function executor(resolve, reject) {
    console.log("Executor function is running")
    setTimeout(() => {
        console.log("Resolving a promise after 2 sec")
        reject("Promise is resolved inside set time out.")
    }, 2 * 1000)
    
    // can I reject promise as well?
}

const p = new Promise(executor).then(success).catch(failure)