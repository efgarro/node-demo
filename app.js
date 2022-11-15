const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hellow Bella!"));
app.listen(port, () => console.log(`Port is running on port ${port}`));
