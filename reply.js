/* 
REPLY MANAGER BY POKETALE 
1.3.1 (c) 2021 Poketale bot
LİSANS:MİT
*/

class ReplyManeger {
      static reply(msg, d,error){ 
    console.error("[REPLY UTİL] DEPRECATED:.reply yerine lütfen .reply.true yada .reply.false kullanın")
        return "[REPLY UTİL] DEPRECATED:.reply yerine lütfen .reply.true yada .reply.false kullanın"
    }
    static true(msg, d){ //etiket atan reply
        var e = true
    if(!msg) return `.reply(message,"mesajın") şeklinde yazmayı unutma`

  
if(!d) return "Bir mesaj gir"
    msg.client.api.channels(msg.channel.id).messages.post({ 
    data: {
        content: d,   message_reference: { message_id: msg.id },
        allowed_mentions: { replied_user: e }
}
 }).then(x => x.referenced_message);
      return "Yay! Başardın!"
      console.log(`[REPLY UTİL] mesaj:${d}`)
    
}
static false(msg, d) { //etiket atmayan reply
    var e = false
    if(!msg) return `.reply(message,"mesajın") şeklinde yazmayı unutma`

  
if(!d) return "Bir mesaj gir"
    msg.client.api.channels(msg.channel.id).messages.post({ 
    data: {
        content: d,   message_reference: { message_id: msg.id },
        allowed_mentions: { replied_user: e }
}
 }).then(x => x.referenced_message);
        return "Yay! Başardın!"
          console.log(`[REPLY UTİL] mesaj:${d}`)

}
}


ReplyManeger.version = "1.3.1"



module.exports = ReplyManeger;

