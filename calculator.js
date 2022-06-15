const express = require('express')
const bodyParser=require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000

app.get('/bmicalculator',(req, res) => {
  res.sendFile(__dirname+"/bmicalculator.html")
})

app.post('/bmicalculator',(req, res) => {
  var height=NUmber(req.body.height);
  var weight=Number(req.body.weight);
  var =num1+num2;

  res.send("reuslt is "+result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
