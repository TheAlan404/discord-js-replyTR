const reply = require("../reply.js")


function reply(a,b,c) {
if(!b) return
if(!a) return 
if(!c) return

if(a === "true") return reply.true(b,c)
if(a === "false") return reply.false(b,c)
}

reply(true,messsage,"sa")
