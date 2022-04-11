const getElem = id => document.getElementById(id);

const employeeList = new EmployeeList();

// Input dom
const account = getElem("tknv");
const fullName = getElem("name");
const email = getElem("email");
const password = getElem("password");
const workingDate = getElem("datepicker");
const basicSalary = getElem("luongCB");
const title = getElem("chucvu");
const workingHours = getElem("gioLam");
const keyword = getElem("searchName");

// Btn dom
const addEmployeeBtn = getElem("btnThemNV");
const updateEmployeeBtn = getElem("btnCapNhat");

// Local storage handler
function setLocalStorage() {
  const json = JSON.stringify(employeeList.list);
  localStorage.setItem("employeeList", json);
}

(function getLocalStorage() {
  const json = localStorage.getItem("employeeList");
  if (json) {
    const data = JSON.parse(json);
    employeeList.list = data;
    createTable(employeeList.list);
  }
})();

// Create table of employee
function createTable(employeeList) {
  content = "";
  for (let i = 0; i < employeeList.length; ++i) {
    const employee = employeeList[i];
    content += `
      <tr>
        <td>${employee.account}</td>
        <td>${employee.fullName}</td>
        <td>${employee.email}</td>
        <td>${employee.workingDate}</td>
        <td>${employee.title}</td>
        <td>${employee.totalSalary}</td>
        <td>${employee.type}</td>
        <td><button class="btn btn-danger" onclick="deleteEmployee('${employee.account}');">X</button></td>
      <tr>
    `;
  }

  getElem("tableDanhSach").innerHTML = content;
}

keyword.addEventListener("keyup", function () {
  const employeeListByType = employeeList.findEmployeeByType(
    keyword.value.trim()
  );
  if (!employeeListByType.length) {
    createTable(employeeList.list);
    return;
  }

  createTable(employeeListByType);
});

const validation = new Validation();
function isValidEmployeeInfo(
  account,
  fullName,
  email,
  password,
  workingDate,
  basicSalary,
  title,
  workingHours
) {
  let isValid = true;

  // Validate account
  isValid &=
    validation.isValid(
      isEmpty,
      account,
      "tbTKNV",
      "(*) Vui lòng không để trống tài khoản"
    ) &&
    validation.isValid(
      isValidLength,
      account,
      "tbTKNV",
      "(*) Tài khoản phải từ 4 - 6 ký số",
      [4, 6]
    ) &&
    validation.isValid(
      isValidPattern,
      account,
      "tbTKNV",
      "(*) Tài khoản phải là số",
      /^[0-9]+$/
    );

  // Validate employee name
  isValid &=
    validation.isValid(
      isEmpty,
      fullName,
      "tbTen",
      "(*) Vui lòng không để trống tên nhân viên"
    ) &&
    validation.isValid(
      isValidPattern,
      fullName,
      "tbTen",
      "(*) Tên nhân viên phải là chữ",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );

  // Validate email
  isValid &=
    validation.isValid(
      isEmpty,
      email,
      "tbEmail",
      "(*) Vui lòng không để trống email"
    ) &&
    validation.isValid(
      isValidPattern,
      email,
      "tbEmail",
      "Email không đúng định dạng",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

  // Validate working date
  isValid &= validation.isValid(
    isEmpty,
    workingDate,
    "tbNgay",
    "(*) Vui lòng không để trống ngày làm việc"
  );

  // Validate password
  isValid &=
    validation.isValid(
      isEmpty,
      password,
      "tbMatKhau",
      "(*) Vui lòng không để trống mật khẩu"
    ) &&
    validation.isValid(
      isValidLength,
      password,
      "tbMatKhau",
      "(*) Mật khẩu phải từ 6 - 10 ký tự",
      [6, 10]
    ) &&
    validation.isValid(
      isValidPattern,
      password,
      "tbMatKhau",
      "(*) Chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt",
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
    );

  // Validate basic salary
  isValid &=
    validation.isValid(
      isEmpty,
      basicSalary,
      "tbLuongCB",
      "(*) Vui lòng không để trống lương cơ bản"
    ) &&
    validation.isValid(
      isValidPattern,
      basicSalary,
      "tbLuongCB",
      "(*) Lương cơ bản phải là số",
      /^[0-9]+$/
    ) &&
    validation.isValid(
      isInValidRange,
      basicSalary,
      "tbLuongCB",
      "(*) Lương cơ bản phải từ 1.000.000 - 20.000.000",
      [1000000, 20000000]
    );

  // Validate title
  isValid &= validation.isValid(
    function (value) {
      return value !== "Chọn chức vụ";
    },
    title,
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ hợp lệ"
  );

  // Validate working hours
  isValid &=
    validation.isValid(
      isEmpty,
      workingHours,
      "tbGiolam",
      "(*) Vui lòng không để trống giờ làm việc"
    ) &&
    validation.isValid(
      isValidPattern,
      workingHours,
      "tbGiolam",
      "(*) Giờ làm việc phải là số",
      /^[0-9]+$/
    ) &&
    validation.isValid(
      isInValidRange,
      workingHours,
      "tbGiolam",
      "(*) Giờ làm việc phải từ 80 - 200 giờ",
      [80, 200]
    );

  return isValid;
}

function deleteEmployee(account) {
  employeeList.delete(account);
  setLocalStorage();
  createTable(employeeList.list);
}

function getEmployeeInfo() {
  if (
    !isValidEmployeeInfo(
      account.value.trim(),
      fullName.value.trim(),
      email.value.trim(),
      password.value.trim(),
      workingDate.value.trim(),
      basicSalary.value.trim(),
      title.value.trim(),
      workingHours.value.trim()
    )
  )
    return null;

  return new Employee(
    account.value.trim(),
    fullName.value.trim(),
    email.value.trim(),
    password.value.trim(),
    workingDate.value.trim(),
    +basicSalary.value.trim(),
    title.value.trim(),
    +workingHours.value.trim()
  );
}

addEmployeeBtn.addEventListener("click", function () {
  const employee = getEmployeeInfo();
  if (!employee) return;

  const employeeIdx = employeeList.findEmployeeByAccount(employee.account);
  if (employeeIdx !== -1) {
    getElem("tbTKNV").style.display = "block";
    getElem("tbTKNV").innerHTML =
      "(*) Nhân viên với account này đã tồn tại (Account nhân viên là duy nhất)";
    return;
  }

  employeeList.add(employee);
  getElem("tbTKNV").style.display = "none";

  setLocalStorage();
  createTable(employeeList.list);
});

updateEmployeeBtn.addEventListener("click", function () {
  const employee = getEmployeeInfo();
  if (!employee) return;
  const isUpdateSuccess = employeeList.update(employee);
  if (!isUpdateSuccess) {
    getElem("tbTKNV").style.display = "block";
    getElem("tbTKNV").innerHTML = "(*) Không tồn tại nhân viên với account này";
    return;
  }

  getElem("tbTKNV").style.display = "none";

  setLocalStorage();
  createTable(employeeList.list);
});
