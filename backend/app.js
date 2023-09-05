const express = require('express');
const app = express();
const port = 4000;

const podname= process.env.HOSTNAME;
let requests = 0;
let startTime;

app.get('/',  (req, res) => {
  res.send(`Hello world, it's ${podname}(v4)\n`);
  console.log(`Running On: ${podname} | Total Requests: ${++requests} | App Uptime: ${(new Date() - startTime)/1000} seconds | Log Time: ${new Date()}`);
});

// 添加http liveness探针
app.get('/healthz',  (req, res) => {
  res.status(200);
  console.log(`health check, ${podname} is ok`);
  res.send(`${podname} is ok`);
});

app.listen(port, () => {
  startTime = new Date();
  console.log(`Example app listening on port ${port} at ${startTime} | Running On: ${podname}\n`);
  // 10s后结束进程，模拟应用失败关闭
  // setTimeout(() => {
  //   process.exit(1);
  // }, 10000);
});