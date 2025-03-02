let number = +prompt("Mời nhập vào số nguyên: ");

if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log(number + " là số chẵn.");
        alert(number + " là số chẵn.");
    } else {
        console.log(number + " là số lẻ.");
        alert(number + " là số lẻ.");
    }
} else {
    console.log("Bạn đã nhập không phải là số nguyên hợp lệ!");
    alert("Vui lòng nhập một số nguyên hợp lệ!");
}