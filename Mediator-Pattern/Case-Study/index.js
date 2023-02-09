const html = require("./data");
const app = require("express")();

app.use(
  "/",
  (req, res, next) => {
    req.headers["test-header"] = 1234;
    next();
  },
  (req, res, next) => {
    console.log(
      `Request has a test header beibeh ${req.headers["test-header"]}`
    );
    next();
  }
);

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(html));
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
