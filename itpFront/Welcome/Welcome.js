
let jwt = localStorage.getItem("jwt");

if(jwt == null){
    window.location.href = '../Signin/Signin.html'
}

// function loadUser() {

//     // เป็นไฟล์ที่ทำการเรียก API สำหรับการแสดงข้อมูลผู้ใช้ที่ login เข้ามา 
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "http://localhost:8080/indoor/tracking/signout");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    // เป็นการบอกว่า Request body ที่จะส่งไปหาเป็น json
//     xhttp.setRequestHeader("Authorization", "Bearer "+jwt);
//     xhttp.send();    // sendธรรมดา ไม่ต้องใส่ไรไปใน body

//     // call back function จะถูกใช้เมื่อมีค่าส่งกลับมาจาก API
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4){   // มีการส่งค่ากลับมา
//             const objects = JSON.parse(this.responseText);
//             console.log(objects);

//             if(objects['responseStatus'] == 'success') {
//                 // จะมีการดึง Response ที่เป็น Json มาโชว์ ขึ้นอยู่กับว่าเรากำหนดให้มีตัวไหนบ้าง
//                 const user = objects['user'];
//                 document.getElementById("fname").innerHTML = user["fname"];
//                 document.getElementById("avatar").src = user["avatar"];
//                 document.getElementById("username").innerHTML = user["username"];
//                 // .innerHTML .src คือการเปลี่ยนข้างในมัน
//             }
//         }
//     }
// }

// loadUser();

function logout(){
    localStorage.removeItem("jwt");
    window.location.href = "../Signin/Signin.html";
}