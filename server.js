let express = require("express");
let app = express();
const multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let reloadMagic = require("./reload-magic.js");
reloadMagic(app);
let dbo = undefined;
let url =
  "mongodb+srv://VelvetVulture:decode00@cluster0-y23sb.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    dbo = client.db("media-board");
  })
  .catch((err) => console.log(err));

// Your endpoints go after this line
app.get("/newTrailers", (req, res) => {
  console.log("request to all newTrailers");
  dbo
    .collection("newMovies")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("newTrailers", data);
      res.send(JSON.stringify({ success: true, newTrailers: data }));
    });
});
app.get("/streamingList", (req, res) => {
  console.log("request to the streaming list");
  dbo
    .collection("listOfStreming")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("listOfStreaming", data);
      res.send(JSON.stringify({ success: true, listOfStreaming: data }));
    });
});
app.get("/listOfMovies", (req, res) => {
  console.log("request to the list of movies to watch");
  dbo
    .collection("listOfMovies")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("listOfMovies", data);
      res.send(JSON.stringify({ success: true, listOfMovies: data }));
    });
});
// Your endpoints go before this line
app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
