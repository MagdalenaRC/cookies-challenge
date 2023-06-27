//Create an Express application that sets a cookie when routed to /login with their name. 
//If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())

//set cookie in the /login route with the name
app.get('/login', function(req, res) {
    let { name } = req.query
    res.cookie('name', name)
    res.send('Cookies set')
})

app.get('/hello', function(req, res) {
    let name = req.cookies.name;
    if(name) {
        res.send(`Welcome ${name}`)
    }
    else {
        res.send('You must login')
    }
})

app.listen(3001, () => {
    console.log('Server listening on port 3001');
  });
    





