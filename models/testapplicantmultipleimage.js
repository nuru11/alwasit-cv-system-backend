// const mongoose = require("mongoose");

// const ProjectSchema = new mongoose.Schema({
//     name: String,
//     link: String,
//     overview: String
//   });

// const TestApplicantimgScehma = new mongoose.Schema(
//   {
//     personalimage:String,
//     fullbodyimage: String,
//     passportimage: String,
//     video: String, 
//     name: String,  
//     middleName: String,  
//     surname: String,
//     applicantNo: String,
//     sex: String,
//     placeofbirth: String,
//     passportIssuePlace: String,
//     passportnum: String,
//     nationality: String,
//     martialstatus:String,
//     numberofchildren: String,
//     religion: String,
//     weight: String,
//     height: String,
//     educationattainment: String,
//     postappliedfor:String,
//     contractperiod: String,
//     arabicdegree: String,
//     englishdegree: String,
//     ownphonenum: String,
//     contactphonenum: String,
//     dateofbirth: String,
//     age: String,
//     dateofissue: String,
//     expireddate: String,
//     country: String,   
//     position: String,
//     period: String,
//     babysitting: Boolean,
//     cleaning: Boolean,  
//     washing: Boolean,
//     cooking: Boolean,
//     eldercare: Boolean, 
//     monthlysalarySaudi: String,
//     monthlysalaryJordan: String,
//     experience:  [ProjectSchema],
//     createdAt: { type: Date, default: Date.now },

//     visaNo: String,
//     sponsorId: String,
//     sponsorAddress: String,
//     nationalId: String,
//     email: String, 
//     sponsorName: String,
//     sponsorPhone: String,
//     agent: String, 
//     sponsorArabic: String,
//     visaType: String,
//     fileNo: String,  
//     wakala: String,
//     signedUp: String,
//     biometricId: String,
//     contract: String,
//     stickerVisa: String,
//     currentNationality: String,
//     laborId: String,
//   },
//   {
//     collection: "TestApplicantimg",
//   }
// );

// mongoose.model("TestApplicantimg", TestApplicantimgScehma);



//////////////////////////////////////////////////////////////////////////////

const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("cv", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const sequelize = new Sequelize("ntechabp_skywayapi_db", "ntechabp_skywayapidb", "0966202667n", {
//   host: "91.204.209.39",
//   dialect: "mysql",
// });


const sequelize = new Sequelize("ntechabp_alwasit", "ntechabp_alwasitapi_user", "123456@nuru", {
  host: "91.204.209.39",
  dialect: "mysql",
});

// Define TestApplicantimg model
const TestApplicantimg = sequelize.define("TestApplicantimg", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  applicantimg: { type: DataTypes.STRING },
  personalimage: { type: DataTypes.STRING },
  fullbodyimage: { type: DataTypes.STRING },
  passportimage: { type: DataTypes.STRING },
  video: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  middleName: { type: DataTypes.STRING },
  familyName: { type: DataTypes.STRING },
  
  
  applicationNo: { type: DataTypes.STRING },
  sex: { type: DataTypes.STRING },
  placeofbirth: { type: DataTypes.STRING },
  passportIssuePlace: { type: DataTypes.STRING },
  passportnum: { type: DataTypes.STRING },
  nationality: { type: DataTypes.STRING },
  martialstatus: { type: DataTypes.STRING },
  numberofchildren: { type: DataTypes.STRING },
  religion: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  height: { type: DataTypes.STRING },
  educationattainment: { type: DataTypes.STRING },
  postappliedfor: { type: DataTypes.STRING },
  contractperiod: { type: DataTypes.STRING },
  arabicdegree: { type: DataTypes.STRING },
  englishdegree: { type: DataTypes.STRING },
  ownphonenum: { type: DataTypes.STRING },
  contactphonenum: { type: DataTypes.STRING },
  dateofbirth: { type: DataTypes.STRING },
  age: { type: DataTypes.STRING },
  dateofissue: { type: DataTypes.STRING },
  expireddate: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
  period: { type: DataTypes.STRING },
  babysitting: { type: DataTypes.BOOLEAN },
  cleaning: { type: DataTypes.BOOLEAN },
  washing: { type: DataTypes.BOOLEAN },
  cooking: { type: DataTypes.BOOLEAN },
  eldercare: { type: DataTypes.BOOLEAN },
  
  childerncare: { type: DataTypes.BOOLEAN},
  ironingclothes: {type: DataTypes.BOOLEAN},
  
  monthlysalarySaudi: { type: DataTypes.STRING },
  monthlysalaryJordan: { type: DataTypes.STRING },
  experience: { type: DataTypes.STRING },
  visaNo: { type: DataTypes.STRING },
  sponsorId: { type: DataTypes.STRING },
  sponsorAddress: { type: DataTypes.STRING },
  sponsorCity: { type: DataTypes.STRING },
  nationalId: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  sponsorName: { type: DataTypes.STRING },
  sponsorPhone: { type: DataTypes.STRING },
  agent: { type: DataTypes.STRING },
  sponsorArabic: { type: DataTypes.STRING },
  visaType: { type: DataTypes.STRING },
  fileNo: { type: DataTypes.STRING },
  wakala: { type: DataTypes.STRING },
  signedUp: { type: DataTypes.STRING },
  biometricId: { type: DataTypes.STRING },
  contract: { type: DataTypes.STRING },
  stickerVisa: { type: DataTypes.STRING },
  currentNationality: { type: DataTypes.STRING },
  laborId: { type: DataTypes.STRING },
  
  cvcount: { type: DataTypes.STRING },
}, {
  tableName: "testapplicantimg",
  timestamps: true,
});

module.exports = { TestApplicantimg, sequelize };