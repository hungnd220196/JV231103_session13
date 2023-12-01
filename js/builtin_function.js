//setTimeout cho phép delay chương trình trong 1 khoảng tg và chạy 1 lần duy nhất

// setTimeout(function , time_delay);

// setTimeout(() => {
//   console.log("logger");
// }, 3000);

// // setInterval cho phép chương trình bị delay trong một khoảng thời gian nhất định tuy nhiên nó sẽ chạy liên tục

// // setInterval(function, time_delay)

// const logger = () => {
//   console.log(Math.random());
// };

// setInterval(logger, 1000);

// Xay dung dong ho

const logger1 = () => {
  let today = new Date();

  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  let seconds = today.getSeconds().toString().padStart(2, "0");

  //Gắn dữ liệu vào trong DOM
  document.getElementById(
    "clock"
  ).innerHTML = `${hours}: ${minutes}:${seconds}`;
  //   return `${hours}: ${minutes}:${seconds}`;
};
setInterval(() => {
  console.log(logger1());
}, 1000);

/**
 * Kiểm tra định dạng email
 * @param {*} email Chuỗi email cần kiểm tra
 * @returns true nếu email đúng định dạng, false nếu email sai định dạng
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

if (!validateEmail("hung@gmail.com")) {
  console.log("Sai dinh dang");
} else {
  console.log("Dung dinh dang");
}

//xây dựng hàm kiểm tra các trường nhâp vào có để trống không, trừ các giá trị null, undefined, "" thì tất cả giá trị khác đều thỏa mãn
//checkISEmpty (field)

let field = prompt("mời bạn nhập vào");

/**
 * Kiểm tra các trường rỗng
 * @param {*} field trường cần kiểm tra
 * @returns true nếu trường đó bị rỗng, false nếu có giá trị
 * Auth: NDHung (01/12/2023)
 */ 
const checkIsEmpty = (field) => {
  if (field === null || field === undefined || field === "") {
    return true;
  } else {
    return false;
  }
};
if (checkIsEmpty(field)) {
  console.log("Email k được để trống");
} else {
  console.log("Gửi giá trị");
}
