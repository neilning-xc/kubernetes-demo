const express = require('express');
const app = express();
const port = 4000;

const podname= process.env.HOSTNAME;
let requests = 0;
let startTime;

app.get('/',  (req, res) => {
  res.send(`Hello world, it's ${podname}(v1)\n`);
  console.log(`Running On: ${podname} | Total Requests: ${++requests} | App Uptime: ${(new Date() - startTime)/1000} seconds | Log Time: ${new Date()}`);
});

app.listen(port, () => {
  startTime = new Date();
  console.log(`Example app listening on port ${port} at ${startTime} | Running On: ${podname}\n`)
});