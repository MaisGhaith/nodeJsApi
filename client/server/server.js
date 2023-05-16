const express = require('express') // require is a built in function include external modules in node js
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json()); //  built-in middleware function in Express.

//      end point
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server" })
})
// we used app.get to create a get route, and it's take two arguments
// the first is the path of the endpoint  '/message'
// and the second is the callback function, which can be a middleware function or a series/array of middleware functions

// Get in one of the http methods
// since we returning a json object, we are using res.json() to send a json response

app.post('/products', (req, res) => {
    const newProduct = req.body;
    // do something with the new product data, e.g. save it to a database
    res.status(201).json({ message: "Product added successfully" });
});




// ! start the server 
app.listen(8000, () => {
    console.log('server is running on port 8000')
})

// to start the server we will use app.listen() which takes two arguments
// the first is the port number
// ? the second is the callback function, here it's just a console message


// our server is running in 8000 port and our frontend application running on port 3000
// now we will connect them
// ! conect react with node js 
