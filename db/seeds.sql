INSERT INTO departments (name)
VALUES ("Accounting"),
       ("Management"),
       ("IT"),
       ("Customer Service"),
       ("Sales");

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, "Accountant", 50000, 1),
        (2, "Manager", 77000, 2),
        (3, "Software Engineer", 60000, 3),
        (4, "Lead Software Engineer", 95000, 3),
        (5, "Customer Service", 35000, 4),
        (6, "Salesperson", 40000, 5),
        (7, "Sales Lead", 77000, 5);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Ash", "Ketchum", 4, null),
        (2, "Mario", "Mario", 2, 2),
        (3, "Samus", "Aran", 1, null),
        (4, "Tom", "Nook", 3, 3),
        (5, "Olimar", "Pikmin", 5, 4),
        (6, "Donkey", "Kong", 5, null),
        (7, "Cloud", "Strife", 3, null);