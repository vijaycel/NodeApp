const express = require('express');
const path = require('path')
  
const app = express();
const PORT = 5000;

//root url http://localhost:5000
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// express.json() middleware is used to parses the incoming request object as a JSON object.
app.use(express.json());

app.post('/', (req, res)=>{
    const {name} = req.body;
      
    res.send(`Welcome ${name}`);
})
  
// get request http://localhost:5000/admin
app.get('/admin', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Sign in with your admin crdentials!</h1>");
});


// This will serve all static files from public folder http://localhost:5000/static/node.jpeg
app.use('/static', express.static(path.join(__dirname, 'public')))

// serving single file in separate routes
app.get('/profilepic', (req, res)=>{
    res.sendFile(path.join(__dirname,'public/node.jpeg'));
});
  

// default server running
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
app.get('/ss', (req,res)=>{

})