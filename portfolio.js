require('dotenv').config();
const portfolioData = require('./data');
const connectionDb = require('./config/db');
let Portfolio = require('./models/portfolio');

connectionDb();

const importData = async () => {
  try {
    await Portfolio.deleteMany({});
    await Portfolio.insertMany(portfolioData);
    console.log('data successfull inserted');
    process.exit();
  } catch (error) {
    console.error('data unsuccessfully');
    process.exit(1);
  }
};
importData();
