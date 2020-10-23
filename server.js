const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function( req, res){
  res.json(path.join(__dirname, "public/index.html"));
});




// Listener
// =====================================

app.listen(PORT, function(){
  console.log("App listening of PORT " + PORT);
});





//so in theory, you could do res.send(req.body.name) as a variable and then use that variable in an fs.writefile to send that info to lets say…a db.json