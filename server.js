const inquirer = require("inquirer");
const mysql = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: process.env.PORT || 3001,
    }
  );

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
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

init();