module.exports = ({
  name:"geliştirici-rol",
  code:`$if[$message[1]==ayarla]
  $setServerVar[botlistgeliştirici;$mentionedRoles[1]]
  $setServerVar[botlistgeliştiriciaçık;Açık]
  Bot onaylanınca sahibine verilecek rol <@&$mentionedRoles[1]> olarak ayarlandı!
  $argsCheck[>1;{title:HATA}{description:Bir rol etiketleyiniz.}{color:ff0000}]
  $onlyIf[$isNumber[$mentionedRoles[1]]==true;{title:HATA}{description:Sadece bir rol etiketleyiniz.}{color:ff0000}] 
 $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:ff0000}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:ff0000}]
 $endif
$if[$message[1]==sıfırla] 
$setServerVar[botlistgeliştirici;]
  $setServerVar[botlistgeliştiriciaçık;Kapalı]
  Bot onaylanınca sahibine verilecek rol sıfırlandı.
   $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:ff0000}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:ff0000}]
$endif
$argsCheck[>1;{title:HATA}{description:Lütfen $getServerVar[prefix]geliştirici-rol ayarla/sıfırla yazınız.}{color:ff0000}]`})
