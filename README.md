# JavaScript Exercise: Employee Management

See the live page [Employee Management](https://scoobytux-manage-employee.vercel.app/ "Employee Management") 📑

## Introduction

JavaScript exercise with available HTML and CSS template.

I almost did the exercise in the `main` folder (`./js/main/`).

## Features

The exercise has the following main features:

- [x] Add new employee
- [x] Update existing employee
- [x] Delete existing employee
- [x] Find employee by type (excellent, very good, good, average)
- [x] Create a table of employee and display the table
- [x] Validate inputs when adding/ updating the employee. Inputs follow these constrains:

| Input                      | Description                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Tài khoản (account)        | - Empty not allowed                                                                |
|                            | - Including integers >= 0                                                          |
|                            | - From 4 to 6 characters                                                           |
| Họ và tên (fullName)       | - Empty not allowed                                                                |
|                            | - Including letters in the alphabet                                                |
| Email                      | - Empty not allowed                                                                |
|                            | - In a correct format of an email                                                  |
| Mật khẩu (password)        | - Empty not allowed                                                                |
|                            | - From 6 to 10 characters                                                          |
|                            | - Contain at least 1 numeric character, 1 uppercase character, 1 special character |
| Ngày làm (workingDate)     | - Empty not allowed                                                                |
|                            | - In format `mm/dd/yyyy`                                                           |
| Lương cơ bản (basicSalary) | - Empty not allowed                                                                |
|                            | - Including integers from 1.000.000 to 20.000.000 (VND) (input without `.`)        |
| Chức vụ (title)            | - Empty not allowed                                                                |
|                            | - Choose a valid option (not the default one)                                      |
| Giờ làm (workingHours)     | - Empty not allowed                                                                |
|                            | - Including integers from 80 to 200 (hours)                                        |
