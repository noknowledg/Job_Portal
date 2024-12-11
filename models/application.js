// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Application extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Application.init({
//     userId: DataTypes.INTEGER,
//     jobId: DataTypes.INTEGER,
//     status: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Application',
//   });
//   return Application;
// };



// const {DataTypes}= require('sequelize');
// const {sequelize} = require('../config/db');
// const Todo = require('./Todo');
// const User = require('./user')
// const job = require('./job')
// const Application = sequelize.define('applications',{

//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     jobId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "jobs",
//         key: "id",
//       },
//       onDelete: "CASCADE",
//     },
//     applicantID_user: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Users', // Assuming 'Users' is the name of the users table
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
    
//     companyID_user: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Users', // Assuming 'Users' is the name of the users table
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
    
//   }, {
//     timestamps: true,
    
//     }, { sequelize, modelName: 'applications' });
    
//     User.hasMany(Application, { foreignKey: 'applicantID_user' });
//     User.hasMany(Application, { foreignKey: 'companyID_user' });
// Application.belongsTo(User, { foreignKey: 'applicantID_user' });
// Application.belongsTo(job, { foreignKey: 'companyID_user' });


// module.exports = Application;

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../config/db');
// const User = require('./user');
// const Job = require('./job');

// const Application = sequelize.define('Application', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   jobId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: Job, // References the Job model
//       key: 'id',  // Column in the Job model
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   },
//   applicantId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: User, // References the User model (as applicant)
//       key: 'id',   // Column in the User model
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   },
//   companyId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: User, // References the User model (as company)
//       key: 'id',   // Column in the User model
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   },
//  , status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending', // Default status
//   }
// }, {
//   sequelize,
//   modelName: 'Application',
//   timestamps: true, // Adds createdAt and updatedAt fields
// });

// // Relationships

// // A User (as a candidate) can have multiple Applications
// // Relationships in the Application model
// User.hasMany(Application, { foreignKey: 'applicantId' }); // Candidate -> Application
// Application.belongsTo(User, { foreignKey: 'applicantId', as: 'candidate' }); // Application -> Candidate

// User.hasMany(Application, { foreignKey: 'companyId' }); // Company -> Application
// Application.belongsTo(User, { foreignKey: 'companyId', as: 'company' }); // Application -> Company

// Job.hasMany(Application, { foreignKey: 'jobId' }); // Job -> Applications
// Application.belongsTo(Job, { foreignKey: 'jobId' }); // Application -> Job


const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user");
const Job = require("./job");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Job,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    applicantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'pending', // Default status
        }
  },
  {
    timestamps: true,
  }
);

// Relationships

Application.belongsTo(User, { foreignKey: "applicantId", as: "candidate" });


Application.belongsTo(Job, { foreignKey: "jobId", as: "company" });

Job.hasMany(Application, { foreignKey: "jobId" });


module.exports = Application;
