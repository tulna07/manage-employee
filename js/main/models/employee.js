function Employee(
  account,
  fullName,
  email,
  password,
  workingDate,
  basicSalary,
  title,
  workingHours
) {
  this.account = account;
  this.fullName = fullName;
  this.email = email;
  this.password = password;
  this.workingDate = workingDate;
  this.basicSalary = basicSalary;
  this.title = title;
  this.workingHours = workingHours;
  this.totalSalary = 0;
  this.type = 0;

  this.calcTotalSalary();
  this.classifyType();
}

Employee.prototype.calcTotalSalary = function () {
  switch (this.title) {
    case "Sếp":
      this.totalSalary = 3 * this.basicSalary;
      break;
    case "Trưởng phòng":
      this.totalSalary = 2 * this.basicSalary;
      break;
    case "Nhân viên":
      this.totalSalary = 3 * this.basicSalary;
      break;
  }
};

Employee.prototype.classifyType = function () {
  if (this.workingHours >= 192) {
    // Nhân viên xuất sắc
    this.type = "Excelent";
    return;
  }
  if (this.workingHours >= 176) {
    // Nhân viên giỏi
    this.type = "Very Good";
    return;
  }
  if (this.workingHours >= 160) {
    // Nhân viên khá
    this.type = "Good";
    return;
  }
  // Nhân viên trung bình
  this.type = "Average";
};
