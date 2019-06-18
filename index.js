const express = require('express');

const cohortsRouter = require('./router/cohorts-router.js');
const studentsRouter = require('./router/students-router.js');

const server = express();

server.use(express.json());
server.use('/api/cohorts', cohortsRouter)
server.use('/api/students', studentsRouter)


const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
