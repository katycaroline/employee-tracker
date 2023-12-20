const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "local",
        port: "3001",
        user: "root",
        password: "",
        database: "",
    }
);

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