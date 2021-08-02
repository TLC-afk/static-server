const fs = require('fs')

//读数据库
const userString = fs.readFileSync('./db/user.json').toString()
const userArray = JSON.parse(userString)

 
//写数据库
const user3 = {"id":3, "name":"wang", "password":"zzz"}
userArray.push(user3)
const data = JSON.stringify(userArray)
fs.writeFileSync('./db/user.json',data)