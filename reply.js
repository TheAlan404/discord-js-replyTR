/* 
	REPLY MANAGER BY POKETALE 
	2.0.0 (c) 2020-2021 Poketale bot
	ÇALINMASI KESİNLİKLE YASAKTIR
	LİSANS:MİT
*/


class ReplyManeger {
	static istrue(d){
		var e = d
		if (e = true) {
			var b = e
			return b
		}
		if (e = false) {
			var b = e
			return b
		}
	}
    static reply(){
		throw new Error("[REPLY UTİL] DEPRECATED:.reply yerine lütfen .reply.true yada .reply.false kullanın")
    }
	
    static true(msg, d){ 
		var e = true
		if(!msg) throw new TypeError (`.true(message,"mesajın") şeklinde yazmayı unutma`)

		var msge = {
			data: {
				içerik: d,
				replied_user: e,
				message_id: msg.id,
				kanal: msg.channel,
				mesaj: msg,
			},
		};

		if(!d) throw new TypeError ("Bir mesaj gir")
		msg.client.api.channels(msg.channel.id).messages.post({ 
		data: {
		content: d,   message_reference: { message_id: msg.id },
		allowed_mentions: { replied_user: e }
		}
		}).then(x => x.referenced_message);
		return msge
		console.log(`[REPLY UTİL] mesaj:${d}`)
	}
	static false(msg, d) {
		var e = false
		if(!msg) throw new Error(`.false(message,"mesajın") şeklinde yazmayı unutma`)
		if(!d) throw new Error("Bir mesaj gir")

		var msge = {
			data: {
				içerik: d,
				replied_user: e,
				message_id: msg.id,
				kanal: msg.channel,
				mesaj: msg,
			},
		};

		msg.client.api.channels(msg.channel.id).messages.post({
			data: {
				content: d,   message_reference: { message_id: msg.id },
				allowed_mentions: { replied_user: e }
			}
		}).then(x => x.referenced_message);
		return msge
		console.log(`[REPLY UTİL] mesaj:${d}`) // why is dis neccesary lol
	}
  
}
 
ReplyManeger.version = "2.0"
 
module.exports = ReplyManeger;


/*
	2.0.0 YENİLİKLER - REPLY MANAGER BY POKETALE BOT
	-Tüm return hataları throw new TypeError ile değiştirildi
	-reply.<true/false>.data eklendi
*/