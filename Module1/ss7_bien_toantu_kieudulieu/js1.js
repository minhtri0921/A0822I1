alert("Bài 1")
let vatLy ;
let hoaHoc;
let sinhHoc;
vatLy = parseInt(prompt("Nhap diem vat ly : "));
hoaHoc = parseInt(prompt("Nhap diem hoa hoc : "));
sinhHoc = parseInt(prompt("Nhap diem sinh hoc : "));
let diemTrungBinh = (vatLy + hoaHoc + sinhHoc)/3;

alert("Bài 2")
let celsius;
let fahrenheit ;
celsius = parseInt(prompt(" Nhập độ c : "));
fahrenheit = (((celsius/5)*9)+32);

alert("Bài 3");
let dienTich;
let PI = 3.14;
let banKinh;
banKinh = parseInt(prompt("Nhập bán kính :"));
dienTich = PI*(banKinh*banKinh);

alert("Bài 4");
let chuViHinhTron;
chuViHinhTron = 2*PI*banKinh;
document.write("diem trung binh : "+diemTrungBinh);
document.write("Độ F là : "+fahrenheit)
document.write("Diện tích hình tròn : "+dienTich)
document.write("Chu vi hình tròn là : "+chuViHinhTron);