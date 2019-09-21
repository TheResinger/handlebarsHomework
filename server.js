let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('views/images'));

let handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout : "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
});