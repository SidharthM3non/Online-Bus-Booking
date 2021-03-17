const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

 
// create application/json parser
var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var employees = [
    { id: 34, name: "Ravi", salary: 34343.34},
    { id: 4, name: "Priya", salary: 44343.34},
    { id: 13, name: "Rahul", salary: 24343.34}
]

app.post('/employees', jsonParser, (req,res)=>{
    var employee = req.body;
    console.log(req.body);
    employees.push(employee);
    res.status(201).json({message: "Inserted successfully!!"})
})

app.get('/employees', (req, res) => {
    res.json(employees);
})

app.delete('/employees/:index', (req,res) => {
    var id = req.params['index'];
    console.log(req.params);
    employees.splice(id,1);
    res.status(200).json({message:"Deleted successfully"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})