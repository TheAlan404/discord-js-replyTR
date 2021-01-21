# discord-reply-TR 2.0.0
discord.js reply manager ama türkiş

# Kullanım örneği

```js
const reply = require("discord-reply-tr")
reply.true(message,"mesajın") // etiketli reply 
/*
message = mesajı tanımlıyoruz. bu msg yada m de olabilir
örnk:
*/
reply.true(m,"mesajın") // etiketli reply 
reply.true(msg,"mesajın") // etiketli reply 

////// ETİKETSİZ REPLY ÖRNEKLERİ //////
const reply = require("discord-reply-tr")
reply.false(msg,"mesajın")
reply.false(message,"mesajın")
reply.false(m,"mesajın"

```


#İndir lol:
```js
npm i discord-reply-tr
```
# Yenilikler
```md
2.0.0
-Tüm return hataları throw new TypeError ile değiştirildi
-reply.<true/false>.data eklendi
```
