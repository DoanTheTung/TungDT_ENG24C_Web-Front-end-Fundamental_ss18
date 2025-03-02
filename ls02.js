let math = parseFloat(+prompt("mời nhập điểm môn toán: "));
let literature = parseFloat(+prompt("mời nhập môn văn: "));
let english = parseFloat(+prompt("mời nhập điểm môn anh: "));

if (isNaN(math) || isNaN(literature) || isNaN(english)){
    alert("điểm không hợp lệ! Vui lòng nhập điểm hợp lệ!")
}

let average = (math + literature + english) / 3;
let AcademicPerformance = "";

if (average >= 8.0) {
    AcademicPerformance = "Giỏi";
} else if (average >= 6.5){
    AcademicPerformance = "Khá";
} else if (average >= 5.0){
    AcademicPerformance = "Trung bình";
} else{
    AcademicPerformance = "Yếu";
}

alert(`Điểm trung bình: ${average.toFixed(2)}\n Xếp loại: ${AcademicPerformance}`);
console.log(`Điểm trung bình: ${average.toFixed(2)}`);
console.log(`Xếp loại: ${AcademicPerformance}`);