module.exports = ({
  name:"botlist-yetkili-rol",
  code:`$if[$message[1]==sıfırla]
$setServerVar[botlistyetkili;]
  $setServerVar[botlistyetkiliaçık;Kapalı]
  Bot list yetkili rol sıfırlandı.
  $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:ff0000}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:ff0000}]
$endif
$if[$message[1]==ayarla]
$setServerVar[botlistyetkili;$mentionedRoles[1]]
  $setServerVar[botlistyetkiliaçık;Açık]
  Yetkili rolü <@&$mentionedRoles[1]> olarak ayarlandı!
  $argsCheck[>1;{title:HATA}{description:Bir rol etiketleyiniz.}{color:ff0000}]
  $onlyBotPerms[manageroles;{title:HATA}{description:Rolleri yönet yetkim olmadığı için işlem yapamam!}{color:ff0000}]  
  $onlyPerms[admin;{title:HATA}{description:Bu komudu kullanmak için \`Yönetici\` yetkisine sahip olmalısın!}{color:ff0000}]
$endif
$argsCheck[>1;{title:HATA}{description:Lütfen $getServerVar[prefix]botlist-yetkili-rol ayarla/sıfırla yazınız.}{color:ff0000}]`})
