var soTxtEl=document.getElementById('soTxt');
var addSoNguyenEl=document.getElementById('addSoNguyen');

var numberArr = [];

function hienThiKetQua(tongSoDuong, demSoDuong,soNhoNhat,soDuongNhoNhat,thuTuTangDan,) {
  document.getElementById("cau1").innerText = tongSoDuong;
  document.getElementById("cau2").innerText = demSoDuong;
  document.getElementById("cau3").innerText = soNhoNhat;
  document.getElementById("cau4").innerText = soDuongNhoNhat;
  document.getElementById("cau7").innerText = thuTuTangDan;
//   document.getElementById("cau5").innerText = soChanCuoiCung;

}

function themSo() {
  var value = soTxtEl.value.trim() * 1;
  var tongSoDuong = 0;
  var demSoDuong = 0;
  var N
  numberArr.push(value);  
    soTxtEl.value = "";
  
  thuTuTangDan = numberArr.sort((a, b) => a - b);
  var soNhoNhat = Math.min.apply(Math, numberArr)

for (let i = 0; i < numberArr.length; i++) {
    var currentValue = numberArr[i];
    if (currentValue % 2 == 0) {
      tongSoDuong += currentValue;
      demSoDuong++
    }
}
soDuongNhoNhat = Number.POSITIVE_INFINITY
for (i = 0, N = numberArr.length; i < N; i++) {
    var currentValue = numberArr[i];
    if(currentValue>0)
    soDuongNhoNhat = Math.min(soDuongNhoNhat, currentValue)
}



  hienThiKetQua(tongSoDuong, demSoDuong,soNhoNhat,soDuongNhoNhat,thuTuTangDan,);

}


