const express = require("express")

const server = express()


function registerRoute(method, route, resp, status) {
    if (typeof resp == "function") {
        server[method](route, resp)
    } else {
        server[method](route, (req, res) => {
            res.status(status)
            res.send(resp)
        })
    }
    console.log(`Mapped route {${route}} for ${method.toUpperCase()}`)
}


const registerPost =(route, resp, status = 200)  => registerRoute("post", route, resp, status)
const registerGet =(route, resp, status = 200)  => registerRoute("get", route, resp, status)
const registerPut =(route, resp, status = 200)  => registerRoute("put", route, resp, status)
const registerUse =(route, resp, status = 200)  => registerRoute("use", route, resp, status)


function start(port = 8080) {
    server.listen(port, () => {
        console.log("Mock server started on port: ", port)
    })
}
module.exports = {registerPut, registerPost, registerGet, start}

