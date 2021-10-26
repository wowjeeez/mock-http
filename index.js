const context = require("./server")


context.registerGet("/", {key: "Hello there fellow citizen"})

context.start()
