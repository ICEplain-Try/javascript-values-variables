//Exercise #1: Variable Creation
//Start coding here

// ตัวแปรที่สามารถ Reassign Value ได้
let firstName = "Karter";
let lastName = "Anderson";
let address = "54/24 Gp 5 Bangkruay-Sainoi Bang Kruay Bang Kruai";

// ตัวแปรที่ไม่สามารถ Reassign Value ได้
const restaurantName = "Chef's Table by Chef James";
const totalBill = 15000;
const numberOfRestaurants = 1500;


//Exercise #2: Variable Reassignment
//Start coding here

address = "(970) 878-53292400 County Rd #4Meeker, Colorado(CO), 81641";

// Variable ที่ชื่อ totalBill เปลี่ยนไม่ได้ จำเป็นต้องใช้ let เพื่อสร้าง Variable ใหม่เพื่อที่จะสามารถทำ Reassignment
let updateTotalBill = totalBill;
updateTotalBill = 5000;

// Variable ที่ชื่อ numberOfRestaurants เปลี่ยนไม่ได้ จำเป็นต้องใช้ let เพื่อสร้าง Variable ใหม่เพื่อที่จะสามารถทำ Reassignment
let updateNumberOfRestaurants = numberOfRestaurants;
updateNumberOfRestaurants = 2500;



// ทดลองแสดงผลด้วย console.log
console.log (`ที่อยู่ปัจจุบัน = ${address}`);

console.log (`ราคาอาหารสุทธิ =, ${updateTotalBill}`);

console.log (`ร้านอาหารในปัจจุบัน =, ${updateNumberOfRestaurants} ร้าน`);