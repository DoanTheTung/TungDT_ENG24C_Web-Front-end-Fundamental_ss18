// let isActive = true;
// let isThayBachHandSome = false;

// console.log(1 > 1);//false
// console.log(1 >= 1);//true
// console.log(1 == "1");//true
// console.log(1 === "1");//flase
// console.log(1 != "1");//flase
// console.log(1 !== "1");//true

// //thầy bách vừa đi cắt tóc

// isThayBachHandSome = !isThayBachHandSome;
// console.log("Thầy Bách Hand Some", isThayBachHandSome);

// 1 == "1" && "a" === "a"; // true
// 1 === '1' && "a" ==="a"; //flase

// 1 === '1' || "a" ==="a"; // true

// let salary = +prompt("mời nhập mức lương hàng tháng của bạn: ");

// if (salary < 5000000) {
//     console.log("Thuế bạn cần đóng là 0 VNĐ");
//   } else if (salary < 10000000) {
//     let taxRate = salary * 0.05;
//     taxRate = taxRate.toLocaleString("vi-VN");
//     console.log(`Thuế bạn cần đóng là ${taxRate} VNĐ`);
//   } else if (salary < 18000000) {
//     let taxRate = salary * 0.1;
//     taxRate = taxRate.toLocaleString("vi-VN");
//     console.log(`Thuế bạn cần đóng là ${taxRate} VNĐ`);
//   } else if (salary < 32000000) {
//     let taxRate = salary * 0.15;
//     console.log(`Thuế bạn cần đóng là ${taxRate} VNĐ`);
//   } else {
//     let taxRate = salary * 0.2;
//     console.log(`Thuế bạn cần đóng là ${taxRate} VNĐ`);
//   }  

let codeHTTP = +prompt("Mời nhập mã code HTTP: ");
let key= 1;
switch (codeHTTP) {
    case 200:
        alert("Thành công!");
        break;
    case 201:
        alert("Thêm thành công!");
        break;
    case 400:
        alert("Lỗi request!");
        break;
    case 404:
        alert("Không tìm thấy!");
        break;
    case 500:
        alert("Lỗi sever!");
        break;
    default:
        alert("Mã code HTTP không xác định!");
        break;
}