const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 5000;

const app = express();

// set up the session object
app.use(cookieParser());

app.use(session());

//this catches every route request - every time you change your location bar, this fuction reacts to it and intercepts the route request
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(process.env.PORT);
    //console.log(process.env.NICKNAME);

    // next is the original route request ie. /api/users
    next(); // => send the user to the route they requested
})
// app.use("/user", require("./routes/ums")); 

// use the API route file to handle API routes (/api/users, /api/:user/:id, etc)
app.use("/api", require("./routes/api"));
app.use("/ums", require("./routes/ums")); 

// run the app at the PORT
app.listen(port, () => {
    console.log(`server is runing on ${port}`);
})