// const { Sequelize, DataTypes } = require("sequelize");


// const sequelize = new Sequelize("ntechabp_skywayapi_db", "ntechabp_skywayapidb", "0966202667n", {
//   host: "91.204.209.39",
//   dialect: "mysql",
// });

// // Define TestApplicantimg model
// const TestApplicantimg = sequelize.define("TestApplicantimg", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 
//   laborId: { type: DataTypes.STRING },
// }, {
//   tableName: "testapplicantimg",
//   timestamps: true,
// });

// module.exports = { TestApplicantimg, sequelize };



const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ntechabp_alwasit', 'ntechabp_alwasitapi_user', '123456@nuru', {
  host: '91.204.209.39',
  dialect: 'mysql',
});

// Define the Count model
const Count = sequelize.define('Count', {
  cv_count: { // Updated column name
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'count', // Updated table name
  timestamps: false, // Set to true if you want to use createdAt/updatedAt fields
});

module.exports = { sequelize, Count };