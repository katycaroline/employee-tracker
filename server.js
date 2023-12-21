const inquirer = require("inquirer");
const mysql = require("mysql2");
const sequelize = require('./config/connection');

init();

function init(){
  loadPrompts();
};

 function loadPrompts(){
      inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What do you want to do?",
            choices: ["View all departments","View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee role"]
        }
    ])
    .then((choice) => {
      console.log(choice);
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
            //case "Exit":
              //process.exit;
              default: console.log("hello");
        }
    })
};

function viewDepartments(){
      mysql.query("SELECT * FROM departments", (err,rows) => {
        if(err) throw err;
      
        console.log("Data received from database:");
        console.log(rows);
        init();
      });
};

function viewRoles(){
      mysql.query("SELECT * FROM roles", (err,rows) => {
        if(err) throw err;
      
        console.log("Data received from database:");
        console.log(rows);
        init();
      });
};

function viewEmployees(){
      mysql.query("SELECT * FROM employees", (err,rows) => {
        if(err) throw err;
      
        console.log("Data received from database:");
        console.log(rows);
        init();
      });
};

function addDepartment(){
    const question = [
      {
        type: "input",
        name: "department",
        message: "What do you want to name the new department?"
      },
    ]

    inquirer.prompt(question)
      .then(answer => {
        mysql.query(`INSERT INTO departments(name) VALUES('${answer}')`, function (err, row){
          if (err) {
            console.log(err);
        } else {
            console.log('Added department to database!');
            init();
        }
    })
})
};

function addRole(){
    const question = [
      {
        type: "input",
        name: "id",
        message: "Give the role an id."
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?"
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of this role?"
      },
      {
        type: "input",
        name: "departmentId",
        message: "Give the role a department id."
      }
    ]

    inquirer.prompt(question)
    .then(answer => {
      mysql.query(`INSERT INTO roles(id, title, salary, department_id)
       VALUES('${answer.id}','${answer.title}','${answer.salary}','${answer.departmentId}')`, function (err, row){
        if(err) throw err;

        console.log("Added role to database!")
      })
    })
    
};

function addEmployee(){
    const question = [
      {
        type: "input",
        name: "id",
        message: "Give the employee an id."
      },
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the employee?"
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of this employee?"
      },
      {
        type: "input",
        name: "roleId",
        message: "Give the employee a role id."
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager id of the employee?"
      }
    ]

    inquirer.prompt(question)
    .then(answer => {
      mysql.query(`INSERT INTO employees(id, first_name, last_name, role_id, manager_id)
       VALUES('${answer.id}','${answer.firstName}','${answer.lastName}','${answer.roleId}','${answer.managerId}')`, function (err, row){
        if(err) throw err;

        console.log("Added employee to database!")
      })
    })
    
};


