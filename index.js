let express = require("express");

let app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(process.env.PORT || 3000);

app.get("/", function(request, response)  {
   
    response.render("homePage");
});

app.get("/test", function(request, response)  {
   
    response.render("testPage");
});