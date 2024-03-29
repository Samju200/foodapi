const express = require("express");
const cors = require("cors");
const connectionDb = require("./config/db");
// const transporter = require('./config/mailer');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connectionDb();
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

// const exercisesRouter = require('./routes/exercises');
const usersRouter = require("./routes/users");
const messageRouter = require("./routes/message");
const productRoutes = require("./routes/productRoutes");
const subscribeRoutes = require("./routes/subscribe");
// app.use('/exercises', exercisesRouter);
app.use("/users", usersRouter);
app.use("/", messageRouter);
app.use("/", subscribeRoutes);
app.use("/api/products", productRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
// // connectionDb().then(() => {
// //   app.listen(PORT, () => {
// //     console.log("listening for requests");
// //   });
// // });
