const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { Client } = require("pg");

app.get("/", (req, res) => res.send("Hellow Bella!"));

const client = new Client({
  host: "soy-crc-db-server.postgres.database.azure.com",
  port: 5432,
  database: "crc-store",
  user: "efgarro",
  password: "Due427ga",
  ssl: true,
});

client.connect();

app.get("/users", async (req, res) => {
  const response = await client.query("SELECT * FROM crc_users LIMIT 5");
  console.log(response.rows);
  res.send("Connected to DBase");
});

app.listen(port, () => console.log(`Port is running on port ${port}`));
