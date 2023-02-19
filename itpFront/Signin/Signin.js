// const { default: axios } = require("axios")

let jwt = localStorage.getItem("jwt")
/* localStorage คือตัวที่เก็บค่าต่างๆของ browser
ซึ่งตรงนี้เราจะทำการดึงตัวแปรชื่อ jwt มาใช้ */

if (jwt != null){
    window.location.href = '../Monitor/Monitor.html'
}

async function login(){
 
    // get data จาก id: username & password
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;

    const url = "http://localhost:8080/tracking/api/SignIn";
    
    const loginResponse = await axios.post(  // มี url, request
            url ,
            {
                userEmail : username,    // ตัวแปรที่ get ค่ามา
                userPassword : password,
                userAgent: "userAgent",  // ไม่ต้อง get ค่าอะไรเลยใส่เป็น json ไว้
                sessionRefCode : "sessionRefCode"
            }
    );
    const data = loginResponse.data 
    console.log(loginResponse.data)     // การ return response ที่ได้จาก request

    // ส่วนของการนำ response มาใช้ต่อ
    if(data?.responseCode === "0000" && data?.responseStatus === "success"){
        localStorage.setItem("jwt", data.sessionId);    // ให้ set sesstioinId ไว้ที่ jwt
        window.location.href = '../Monitor/Monitor.html'   
    }else{
        // Swal.fire(
        //     data.responseStatus,  
        //     data.responseMessage
        // )
        swal({
            title: `responseStatus : ${data.responseStatus}`,   //fail
            text: ` responseMessage : ${data.responseMessage}`, // null
            icon: "error",
            timer: 5000
          });
    }

}

// function login() {
//     // ค่าที่จะเรียกจาก api
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // ใช้อันนี้ช่วยเรียก api
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "http://localhost:8080/indoor/tracking/signin",true);    // localhost เปิดไม่ขึ้น 
//     // หาตัวอยางที run ผ่าน localhost
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")     
//     // Content-Type เป็นการกำหนดว่าฟ้อนเราเป็น json
//     // เป็นการบอกว่า Request body ที่จะส่งไปหาเป็น json
    
//     // เรียก API - แปลง object เป็น string เพื่อส่งไปยัง API
//     xhttp.send(JSON.stringify({
//         "language":"en",
//         "userAgent":"firefox",
//         "sessionRefCode":"20190219105321000", 
//         "userEmail": username,
//         "userPassword": password
//     }))

//     // call back function จะถูกใช้เมื่อมีค่าส่งกลับมาจาก API
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4){   // มีการส่งค่ากลับมา
//             const objects = JSON.parse(this.responseText);
//             console.log(objects);

//             if(objects['responseStatus'] == 'success') {   // ถ้าเข้าสำเร็จ

                // localStorage.setItem("jwt", objects["sessionId"]);
                // window.location.href = '../Monitor/Monitor.html'

//               //   {
//               //     "username": "karn.yong@mecallapi.com",    
//               //     "password": "mecallapi"
//               // }

//             }else{  // ถ้าเข้าไม่สำเร็จ ขึ้นpop up บอก error
//                 Swal.fire(
//                     objects['responseStatus'],  // เพิ่มเข้ามา
//                     objects['responseMessage']
//                     // 'error'
//                   )
//             }

//         }
//     }

//     return false;

// }


//---------------------------------------------------------

// var objPeople = [
//     {
//         userEmail: "suteera@gmail.com",
//         userPassword: "2222"
//     },
//     {
//         userEmail: "jirathima@gmail.com",
//         userPassword: "1111"
//     }
// ];

// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     for(i = 0; i < objPeople.length; i++ ){
//         if(userEmail == objPeople[i].userEmail && userPassword == objPeople[i].userPassword){
//             console.log(userEmail + " is logged in");
//         }
//     }
// }

// function login(){
//     window.location.href = '../Monitor/Monitor.html'
// }