let express = require("express");
let app = express();
const multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
const cookieParser = require("cookie-parser");
app.use(cookieParser());
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let reloadMagic = require("./reload-magic.js");
let dbo = undefined;
let url =
  "mongodb+srv://VelvetVulture:decode00@cluster0-y23sb.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    dbo = client.db("media-board");
  })
  .catch((err) => console.log(err));
reloadMagic(app);
app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets
// Your endpoints go after this line

// Your endpoints go before this line
app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
