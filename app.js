const express = require('express');
const cors = require('cors');
const connectionDb = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectionDb();
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

// const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const messageRouter = require('./routes/message');
// app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/', messageRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
