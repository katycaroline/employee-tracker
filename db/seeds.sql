INSERT INTO departments (name)
VALUES ("Accounting"),
       ("Management"),
       ("IT"),
       ("Customer Service"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accountant", 50000, 1),
        ("Manager", 77000, 2),
        ("Software Engineer", 60000, 3),
        ("Lead Software Engineer", 95000, 3),
        ("Customer Service Representative", 35000, 4),
        ("Salesperson", 40000, 5),
        ("Sales Lead", 77000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Ash", "Ketchum", 4, null),
        ("Mario", "Mario", 2, 2),
        ("Samus", "Aran", 1, null),
        ("Tom", "Nook", 3, 3),
        ("Olimar", "Pikmin", 5, 4),
        ("Donkey", "Kong", 5, null),
        ("Cloud", "Strife", 3, null);