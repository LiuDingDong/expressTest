const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
  res.send("你好，译译心 \n hello,liu")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})