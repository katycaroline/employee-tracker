const inquirer = require("inquirer");
const mysql = require("mysql2");
const Sequelize = require('sequelize');

  const con = mysql.createConnection({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3001
  });

  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

function init(){
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What do you want to do?",
            choices: ["View all departments","View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee role"]
        }
    ]).then((choice) => {
        switch (choice.choices){
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateEmployeeRole();
                break;
        }
    })
};

function viewDepartments(){
    const con = mysql.createConnection({
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      })
      con.query('SELECT * FROM departments', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from database:');
        console.log(rows);
      });
};

function viewRoles(){
    const con = mysql.createConnection({
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      })
      con.query('SELECT * FROM roles', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from database:');
        console.log(rows);
      });
};

function viewEmployees(){
    const con = mysql.createConnection({
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      })
      con.query('SELECT * FROM employees', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from database:');
        console.log(rows);
      });
};

init();